import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';

// ======================================================
// Types
// ======================================================

type TaskLike = {
  id: string;
  hours: number;
  progress: number;
  status: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
};

type WorkLogLike = {
  hours: number;
};

type EvaluationLike = {
  id: string;
  evaluatorId: string;
  responsibility: number;
  communication: number;
  teamwork: number;
  quality: number;
  evaluator?: {
    id: string;
    name: string;
  } | null;
};

// ======================================================
// Helper Functions
// ======================================================

function getWorkHours(
  tasks: TaskLike[],
  workLogs: WorkLogLike[],
): number {
  if (workLogs.length > 0) {
    return workLogs.reduce(
      (sum, log) => sum + Number(log.hours || 0),
      0,
    );
  }

  return tasks.reduce(
    (sum, task) => sum + Number(task.hours || 0),
    0,
  );
}

function getTaskProgress(task: TaskLike): number {
  if (task.status === 'COMPLETED') {
    return 100;
  }

  if (task.status === 'IN_PROGRESS') {
    return Math.min(
      Math.max(Number(task.progress || 0), 0),
      100,
    );
  }

  return 0;
}

function getPriorityScore(
  priority: 'LOW' | 'MEDIUM' | 'HIGH',
): number {
  switch (priority) {
    case 'HIGH':
      return 3;

    case 'MEDIUM':
      return 2;

    case 'LOW':
    default:
      return 1;
  }
}

function clampPercentage(value: number): number {
  return Math.min(
    Math.max(value, 0),
    100,
  );
}

function round2(value: number): number {
  return Number(value.toFixed(2));
}

// ======================================================
// Service
// ======================================================

@Injectable()
export class ContributionService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // ====================================================
  // Calculate Member Contribution
  // ====================================================

  async calculateMemberContribution(
    memberId: string,
  ) {
    // --------------------------------------------------
    // 1. ดึงข้อมูลสมาชิก
    // --------------------------------------------------

    const member =
      await this.prisma.member.findUnique({
        where: {
          id: memberId,
        },

        include: {
          project: true,

          tasks: true,

          workLogs: true,

          // ----------------------------------------------
          // Peer Evaluation
          // ----------------------------------------------
          // ไม่นับการประเมินตัวเอง
          // evaluatorId = คนประเมิน
          // memberId = คนที่ถูกประเมิน
          // ----------------------------------------------

          evaluationsReceived: {
            where: {
              evaluatorId: {
                not: memberId,
              },
            },

            include: {
              evaluator: true,
            },

            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      });

    if (!member) {
      throw new NotFoundException(
        'Member not found',
      );
    }

    const tasks =
      member.tasks as TaskLike[];

    const workLogs =
      member.workLogs as WorkLogLike[];

    const evaluations =
      member.evaluationsReceived as EvaluationLike[];

    // --------------------------------------------------
    // 2. Task Completion
    // --------------------------------------------------

    let taskCompletionScore = 0;

    if (tasks.length > 0) {
      const completedTasks =
        tasks.filter(
          (task) =>
            task.status === 'COMPLETED',
        ).length;

      taskCompletionScore =
        (completedTasks / tasks.length) * 100;
    }

    taskCompletionScore =
      clampPercentage(
        taskCompletionScore,
      );

    // --------------------------------------------------
    // 3. Task Importance
    // --------------------------------------------------

    let taskImportanceScore = 0;

    if (tasks.length > 0) {
      const totalPriority =
        tasks.reduce(
          (sum, task) =>
            sum +
            getPriorityScore(
              task.priority,
            ),
          0,
        );

      const maxPriority =
        tasks.length * 3;

      if (maxPriority > 0) {
        taskImportanceScore =
          (totalPriority /
            maxPriority) *
          100;
      }
    }

    taskImportanceScore =
      clampPercentage(
        taskImportanceScore,
      );

    // --------------------------------------------------
    // 4. Work Hours
    // --------------------------------------------------

    const totalWorkHours =
      getWorkHours(
        tasks,
        workLogs,
      );

    let workHoursScore = 0;

    const projectMembers =
      await this.prisma.member.findMany({
        where: {
          projectId:
            member.projectId,
        },

        include: {
          tasks: true,
          workLogs: true,
        },
      });

    const memberHours =
      projectMembers.map(
        (projectMember) => {
          return getWorkHours(
            projectMember.tasks as TaskLike[],
            projectMember.workLogs as WorkLogLike[],
          );
        },
      );

    const maxHours =
      memberHours.length > 0
        ? Math.max(
            ...memberHours,
          )
        : 0;

    if (
      totalWorkHours > 0 &&
      maxHours > 0
    ) {
      workHoursScore =
        (totalWorkHours /
          maxHours) *
        100;
    }

    workHoursScore =
      clampPercentage(
        workHoursScore,
      );

    // --------------------------------------------------
    // 5. Progress
    // --------------------------------------------------

    let progressScore = 0;

    if (tasks.length > 0) {
      const totalProgress =
        tasks.reduce(
          (sum, task) =>
            sum +
            getTaskProgress(task),
          0,
        );

      progressScore =
        totalProgress /
        tasks.length;
    }

    progressScore =
      clampPercentage(
        progressScore,
      );

    // --------------------------------------------------
    // 6. Peer Evaluation
    // --------------------------------------------------
    //
    // เฉพาะ Evaluation จากสมาชิกคนอื่น
    //
    // Responsibility
    // Communication
    // Teamwork
    // Quality
    //
    // คะแนนเต็ม 20
    // --------------------------------------------------

    let peerEvaluationScore = 0;

    if (evaluations.length > 0) {
      const totalEvaluation =
        evaluations.reduce(
          (sum, evaluation) =>
            sum +
            Number(
              evaluation.responsibility ||
                0,
            ) +
            Number(
              evaluation.communication ||
                0,
            ) +
            Number(
              evaluation.teamwork ||
                0,
            ) +
            Number(
              evaluation.quality ||
                0,
            ),
          0,
        );

      const maxEvaluation =
        evaluations.length * 20;

      if (maxEvaluation > 0) {
        peerEvaluationScore =
          (totalEvaluation /
            maxEvaluation) *
          100;
      }
    }

    peerEvaluationScore =
      clampPercentage(
        peerEvaluationScore,
      );

    // --------------------------------------------------
    // 7. Weighted Contribution
    // --------------------------------------------------
    //
    // Task Completion  = 25%
    // Task Importance  = 25%
    // Work Hours       = 15%
    // Progress         = 20%
    // Peer Evaluation  = 15%
    //
    // รวม = 100%
    // --------------------------------------------------

    const contributionScore =
      taskCompletionScore * 0.25 +
      taskImportanceScore * 0.25 +
      workHoursScore * 0.15 +
      progressScore * 0.20 +
      peerEvaluationScore * 0.15;

    // --------------------------------------------------
    // 8. Detailed Peer Evaluations
    // --------------------------------------------------

    const peerEvaluationDetails =
      evaluations.map(
        (evaluation) => {
          const responsibility =
            Number(
              evaluation.responsibility ||
                0,
            );

          const communication =
            Number(
              evaluation.communication ||
                0,
            );

          const teamwork =
            Number(
              evaluation.teamwork ||
                0,
            );

          const quality =
            Number(
              evaluation.quality ||
                0,
            );

          const total =
            responsibility +
            communication +
            teamwork +
            quality;

          const percentage =
            (total / 20) * 100;

          return {
            evaluationId:
              evaluation.id,

            evaluatorId:
              evaluation.evaluatorId,

            evaluatorName:
              evaluation.evaluator?.name ??
              'ไม่ระบุชื่อ',

            scores: {
              responsibility,
              communication,
              teamwork,
              quality,
            },

            totalScore: total,

            maxScore: 20,

            percentage:
              round2(
                percentage,
              ),
          };
        },
      );

    // --------------------------------------------------
    // 9. Peer Evaluation Summary
    // --------------------------------------------------

    const peerEvaluationSummary = {
      totalEvaluations:
        evaluations.length,

      averagePercentage:
        round2(
          peerEvaluationScore,
        ),

      maxScorePerEvaluation: 20,

      criteria: [
        {
          key: 'responsibility',
          name: 'ความรับผิดชอบ',
          maxScore: 5,
        },
        {
          key: 'communication',
          name: 'การสื่อสาร',
          maxScore: 5,
        },
        {
          key: 'teamwork',
          name: 'การทำงานเป็นทีม',
          maxScore: 5,
        },
        {
          key: 'quality',
          name: 'คุณภาพของงาน',
          maxScore: 5,
        },
      ],

      evaluations:
        peerEvaluationDetails,
    };

    // --------------------------------------------------
    // 10. Contribution Breakdown
    // --------------------------------------------------

    const breakdown = {
      taskCompletion: {
        score: round2(
          taskCompletionScore,
        ),
        weight: 25,
        weightedScore: round2(
          taskCompletionScore *
            0.25,
        ),
      },

      taskImportance: {
        score: round2(
          taskImportanceScore,
        ),
        weight: 25,
        weightedScore: round2(
          taskImportanceScore *
            0.25,
        ),
      },

      workHours: {
        score: round2(
          workHoursScore,
        ),
        weight: 15,
        weightedScore: round2(
          workHoursScore *
            0.15,
        ),
      },

      progress: {
        score: round2(
          progressScore,
        ),
        weight: 20,
        weightedScore: round2(
          progressScore *
            0.20,
        ),
      },

      peerEvaluation: {
        score: round2(
          peerEvaluationScore,
        ),
        weight: 15,
        weightedScore: round2(
          peerEvaluationScore *
            0.15,
        ),
      },
    };

    // --------------------------------------------------
    // 11. Return
    // --------------------------------------------------

    return {
      memberId:
        member.id,

      memberName:
        member.name,

      project: {
        id:
          member.project.id,

        name:
          member.project.name,
      },

      scores: {
        taskCompletion:
          round2(
            taskCompletionScore,
          ),

        taskImportance:
          round2(
            taskImportanceScore,
          ),

        workHours:
          round2(
            workHoursScore,
          ),

        progress:
          round2(
            progressScore,
          ),

        peerEvaluation:
          round2(
            peerEvaluationScore,
          ),
      },

      contributionScore:
        round2(
          contributionScore,
        ),

      totalWorkHours:
        round2(
          totalWorkHours,
        ),

      totalTasks:
        tasks.length,

      completedTasks:
        tasks.filter(
          (task) =>
            task.status ===
            'COMPLETED',
        ).length,

      peerEvaluation:
        peerEvaluationSummary,

      breakdown,

      formula: {
        taskCompletionWeight: 25,

        taskImportanceWeight: 25,

        workHoursWeight: 15,

        progressWeight: 20,

        peerEvaluationWeight: 15,

        totalWeight: 100,

        description:
          'Contribution คำนวณจาก Task Completion, Task Importance, Work Hours, Progress และ Peer Evaluation โดยใช้คะแนนหลายด้านร่วมกัน ไม่ได้พิจารณาจากจำนวนชั่วโมงทำงานเพียงอย่างเดียว',
      },
    };
  }
}

