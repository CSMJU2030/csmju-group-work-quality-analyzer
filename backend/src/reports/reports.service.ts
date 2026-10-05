import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // =====================================================
  // Contribution
  // =====================================================

  async getContribution(memberId: string) {
    const member = await this.prisma.member.findUnique({
      where: {
        id: memberId,
      },
    });

    if (!member) {
      throw new NotFoundException('ไม่พบสมาชิก');
    }

    const tasks = await this.prisma.task.findMany({
      where: {
        memberId,
      },
    });

    const workLogs = await this.prisma.workLog.findMany({
      where: {
        memberId,
      },
    });

    const evaluations =
      await this.prisma.peerEvaluation.findMany({
        where: {
          targetMemberId: memberId,
        },
      });

    // -----------------------------
    // Task Completion
    // -----------------------------

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
      (task) => task.status === 'COMPLETED',
    ).length;

    const completionRate =
      totalTasks > 0
        ? (completedTasks / totalTasks) * 100
        : 0;

    // -----------------------------
    // Task Importance
    // -----------------------------

    const priorityScore = {
      LOW: 50,
      MEDIUM: 75,
      HIGH: 100,
    };

    const importanceRate =
      totalTasks > 0
        ? tasks.reduce(
            (sum, task) =>
              sum +
              (priorityScore[task.priority] || 0),
            0,
          ) / totalTasks
        : 0;

    // -----------------------------
    // Work Hours
    // -----------------------------

    const totalWorkHours = workLogs.reduce(
      (sum, log) =>
        sum + Number(log.hours || 0),
      0,
    );

    const allProjectMembers =
      await this.prisma.member.findMany({
        where: {
          projectId: member.projectId,
        },
        include: {
          workLogs: true,
        },
      });

    const memberWorkHours =
      allProjectMembers.map((item) =>
        item.workLogs.reduce(
          (sum, log) =>
            sum + Number(log.hours || 0),
          0,
        ),
      );

    const highestWorkHours =
      Math.max(...memberWorkHours, 0);

    const workHoursRate =
      highestWorkHours > 0
        ? (totalWorkHours / highestWorkHours) * 100
        : 0;

    // -----------------------------
    // Progress (งานที่เสร็จแล้วนับเป็น 100)
    // -----------------------------

    const progressRate =
      totalTasks > 0
        ? tasks.reduce(
            (sum, task) =>
              sum + this.getTaskProgress(task),
            0,
          ) / totalTasks
        : 0;

    // -----------------------------
    // Peer Evaluation
    // -----------------------------

    const peerEvaluationRate =
      evaluations.length > 0
        ? (evaluations.reduce(
            (sum, evaluation) => {
              const score =
                Number(evaluation.responsibility || 0) +
                Number(evaluation.communication || 0) +
                Number(evaluation.teamwork || 0) +
                Number(evaluation.quality || 0);

              return sum + score;
            },
            0,
          ) /
            (evaluations.length * 20)) *
          100
        : 0;

    // -----------------------------
    // Final Contribution
    // -----------------------------

    const contributionScore =
      completionRate * 0.25 +
      importanceRate * 0.25 +
      workHoursRate * 0.15 +
      progressRate * 0.20 +
      peerEvaluationRate * 0.15;

    const completionValue = Number(
      completionRate.toFixed(2),
    );

    const importanceValue = Number(
      importanceRate.toFixed(2),
    );

    const workHoursValue = Number(
      workHoursRate.toFixed(2),
    );

    const progressValue = Number(
      progressRate.toFixed(2),
    );

    const peerEvaluationValue = Number(
      peerEvaluationRate.toFixed(2),
    );

    return {
      // field ที่หน้ารายงานใช้
      memberId: member.id,
      memberName: member.name,

      scores: {
        taskCompletion: completionValue,
        taskImportance: importanceValue,
        workHours: workHoursValue,
        progress: progressValue,
        peerEvaluation: peerEvaluationValue,
      },

      // field เดิม
      member: {
        id: member.id,
        name: member.name,
        role: member.role,
      },

      completionRate: completionValue,
      importanceRate: importanceValue,
      workHoursRate: workHoursValue,
      progressRate: progressValue,
      peerEvaluationRate: peerEvaluationValue,

      contributionScore: Number(
        Math.min(100, contributionScore).toFixed(2),
      ),

      totalWorkHours: Number(
        totalWorkHours.toFixed(2),
      ),

      totalTasks,

      completedTasks,
    };
  }

  // =====================================================
  // Workload
  // =====================================================

  async getWorkload(projectId: string) {
    const project =
      await this.prisma.project.findUnique({
        where: {
          id: projectId,
        },
      });

    if (!project) {
      throw new NotFoundException('ไม่พบโครงการ');
    }

    const members =
      await this.prisma.member.findMany({
        where: {
          projectId,
        },
        include: {
          tasks: true,
          workLogs: true,
        },
      });

    const memberData = members.map((member) => {
      const totalTasks = member.tasks.length;

      const completedTasks =
        member.tasks.filter(
          (task) =>
            task.status === 'COMPLETED',
        ).length;

      const taskHours = member.tasks.reduce(
        (sum, task) =>
          sum + Number(task.hours || 0),
        0,
      );

      const workHours = member.workLogs.reduce(
        (sum, log) =>
          sum + Number(log.hours || 0),
        0,
      );

      const averageProgress =
        totalTasks > 0
          ? member.tasks.reduce(
              (sum, task) =>
                sum + this.getTaskProgress(task),
              0,
            ) / totalTasks
          : 0;

      return {
        id: member.id,
        memberId: member.id,
        name: member.name,
        role: member.role,

        totalTasks,
        completedTasks,

        taskHours: Number(
          taskHours.toFixed(2),
        ),

        workHours: Number(
          workHours.toFixed(2),
        ),

        averageProgress: Number(
          averageProgress.toFixed(2),
        ),
      };
    });

    const totalTasks = memberData.reduce(
      (sum, member) =>
        sum + member.totalTasks,
      0,
    );

    const totalTaskHours = memberData.reduce(
      (sum, member) =>
        sum + member.taskHours,
      0,
    );

    const totalWorkHours = memberData.reduce(
      (sum, member) =>
        sum + member.workHours,
      0,
    );

    const averageProgress =
      memberData.length > 0
        ? memberData.reduce(
            (sum, member) =>
              sum + member.averageProgress,
            0,
          ) / memberData.length
        : 0;

    // -----------------------------
    // Team Balance
    // -----------------------------

    const workloads = memberData.map(
      (member) => member.totalTasks,
    );

    const highestWorkload =
      Math.max(...workloads, 0);

    const lowestWorkload =
      workloads.length > 0
        ? Math.min(...workloads)
        : 0;

    const difference =
      highestWorkload - lowestWorkload;

    const teamBalance =
      difference >= 3
        ? 'UNBALANCED'
        : 'BALANCED';

    return {
      project: {
        id: project.id,
        name: project.name,
      },

      members: memberData,

      team: {
        totalMembers: members.length,
        totalTasks,
        totalTaskHours: Number(
          totalTaskHours.toFixed(2),
        ),
        totalWorkHours: Number(
          totalWorkHours.toFixed(2),
        ),
        averageProgress: Number(
          averageProgress.toFixed(2),
        ),
      },

      teamBalance: {
        status: teamBalance,
        balanceStatus:
          teamBalance === 'UNBALANCED'
            ? 'IMBALANCED'
            : 'BALANCED',
        highestWorkload,
        lowestWorkload,
        difference,
        workloadDifference: difference,
      },
    };
  }

  // =====================================================
  // Peer Evaluations
  // =====================================================

  async getPeerEvaluations(
    projectId: string,
  ) {
    const members =
      await this.prisma.member.findMany({
        where: {
          projectId,
        },
      });

    const memberIds = members.map(
      (member) => member.id,
    );

    const evaluations =
      await this.prisma.peerEvaluation.findMany({
        where: {
          targetMemberId: {
            in: memberIds,
          },
        },
      });

    const memberResults = members.map(
      (member) => {
        const memberEvaluations =
          evaluations.filter(
            (evaluation) =>
              evaluation.targetMemberId ===
              member.id,
          );

        if (
          memberEvaluations.length === 0
        ) {
          return {
            id: member.id,
            memberId: member.id,
            name: member.name,
            memberName: member.name,
            averageScore: 0,
            averagePercentage: 0,
            percentage: 0,
            strengths: [],
            areasToReview: [],
            insight: {
              strengths: [],
              areasToReview: [],
            },
          };
        }

        const responsibility =
          this.average(
            memberEvaluations.map(
              (item) =>
                Number(
                  item.responsibility,
                ),
            ),
          );

        const communication =
          this.average(
            memberEvaluations.map(
              (item) =>
                Number(
                  item.communication,
                ),
            ),
          );

        const teamwork =
          this.average(
            memberEvaluations.map(
              (item) =>
                Number(
                  item.teamwork,
                ),
            ),
          );

        const quality =
          this.average(
            memberEvaluations.map(
              (item) =>
                Number(item.quality),
            ),
          );

        const averageScore =
          this.average([
            responsibility,
            communication,
            teamwork,
            quality,
          ]);

        const averagePercentage =
          (averageScore / 5) * 100;

        const strengths: string[] = [];

        if (responsibility >= 4) {
          strengths.push('ความรับผิดชอบ');
        }

        if (communication >= 4) {
          strengths.push('การสื่อสาร');
        }

        if (teamwork >= 4) {
          strengths.push('การทำงานเป็นทีม');
        }

        if (quality >= 4) {
          strengths.push('คุณภาพงาน');
        }

        const areasToReview: string[] = [];

        if (responsibility < 3) {
          areasToReview.push(
            'ความรับผิดชอบ',
          );
        }

        if (communication < 3) {
          areasToReview.push(
            'การสื่อสาร',
          );
        }

        if (teamwork < 3) {
          areasToReview.push(
            'การทำงานเป็นทีม',
          );
        }

        if (quality < 3) {
          areasToReview.push(
            'คุณภาพงาน',
          );
        }

        const percentageValue = Number(
          averagePercentage.toFixed(2),
        );

        return {
          id: member.id,
          memberId: member.id,
          name: member.name,
          memberName: member.name,

          responsibility: Number(
            responsibility.toFixed(2),
          ),

          communication: Number(
            communication.toFixed(2),
          ),

          teamwork: Number(
            teamwork.toFixed(2),
          ),

          quality: Number(
            quality.toFixed(2),
          ),

          averageScore: Number(
            averageScore.toFixed(2),
          ),

          averagePercentage: percentageValue,
          percentage: percentageValue,

          strengths,
          areasToReview,
          insight: {
            strengths,
            areasToReview,
          },
        };
      },
    );

    const evaluatedMembers =
      memberResults.filter(
        (member) =>
          member.averageScore > 0,
      );

    const teamAverageScore =
      evaluatedMembers.length > 0
        ? this.average(
            evaluatedMembers.map(
              (member) =>
                member.averageScore,
            ),
          )
        : 0;

    return {
      team: {
        averageScore: Number(
          teamAverageScore.toFixed(2),
        ),

        averagePercentage: Number(
          ((teamAverageScore / 5) * 100).toFixed(
            2,
          ),
        ),

        totalEvaluations:
          evaluations.length,
      },

      members: memberResults,
    };
  }

  // =====================================================
  // Summary
  // =====================================================

  async getSummary(projectId: string) {
    const members =
      await this.prisma.member.findMany({
        where: {
          projectId,
        },
      });

    const contributions =
      await Promise.all(
        members.map((member) =>
          this.getContribution(member.id),
        ),
      );

    const workload =
      await this.getWorkload(projectId);

    const peerEvaluations =
      await this.getPeerEvaluations(
        projectId,
      );

    const averageContribution =
      contributions.length > 0
        ? this.average(
            contributions.map(
              (item) =>
                Number(
                  item.contributionScore,
                ),
            ),
          )
        : 0;

    return {
      contributions,

      workload,

      peerEvaluations,

      summary: {
        totalMembers: members.length,

        totalTasks: workload.team.totalTasks,

        totalWorkHours:
          workload.team.totalWorkHours,

        averageContribution: Number(
          averageContribution.toFixed(2),
        ),

        averagePeerEvaluation:
          peerEvaluations.team
            .averagePercentage,

        teamBalance:
          workload.teamBalance.status,
      },
    };
  }

  // =====================================================
  // Helpers
  // =====================================================

  // งานที่เสร็จแล้วนับเป็น 100% ไม่ว่า field progress จะเป็นเท่าไร
  private getTaskProgress(task: {
    status: string;
    progress?: number | null;
  }): number {
    if (task.status === 'COMPLETED') {
      return 100;
    }

    return Number(task.progress || 0);
  }

  private average(
    values: number[],
  ): number {
    if (values.length === 0) {
      return 0;
    }

    return (
      values.reduce(
        (sum, value) =>
          sum + value,
        0,
      ) / values.length
    );
  }
}