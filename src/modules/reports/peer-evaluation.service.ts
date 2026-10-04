import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class PeerEvaluationService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // ======================================================
  // Generate Evaluation Insight
  // ======================================================

  private generateInsight(scores: {
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
  }) {
    const dimensions = [
      {
        key: 'responsibility',
        name: 'ความรับผิดชอบ',
        score: scores.responsibility,
      },
      {
        key: 'communication',
        name: 'การสื่อสาร',
        score: scores.communication,
      },
      {
        key: 'teamwork',
        name: 'การทำงานเป็นทีม',
        score: scores.teamwork,
      },
      {
        key: 'quality',
        name: 'คุณภาพของงาน',
        score: scores.quality,
      },
    ];

    const strengths = dimensions
      .filter(
        (dimension) =>
          dimension.score >= 4,
      )
      .map(
        (dimension) =>
          dimension.name,
      );

    const areasToReview = dimensions
      .filter(
        (dimension) =>
          dimension.score < 4,
      )
      .map(
        (dimension) =>
          dimension.name,
      );

    return {
      strengths,
      areasToReview,
    };
  }

  // ======================================================
  // Empty Evaluation Result
  // ======================================================

  private emptyEvaluationResult(
    memberId: string,
    memberName: string,
  ) {
    return {
      memberId,
      memberName,

      totalEvaluations: 0,

      scores: {
        responsibility: 0,
        communication: 0,
        teamwork: 0,
        quality: 0,
      },

      averageScore: 0,

      percentage: 0,

      insight: {
        strengths: [],
        areasToReview: [],
      },
    };
  }

  // ======================================================
  // Analyze One Member
  // ======================================================

  async analyzeMemberEvaluation(
    memberId: string,
  ) {
    const member =
      await this.prisma.member.findUnique({
        where: {
          id: memberId,
        },

        include: {
          evaluationsReceived: {
            where: {
              // ไม่นับการประเมินตัวเอง
              evaluatorId: {
                not: memberId,
              },
            },
          },
        },
      });

    if (!member) {
      throw new NotFoundException(
        'Member not found',
      );
    }

    const evaluations =
      member.evaluationsReceived;

    // --------------------------------------------------
    // ไม่มี Peer Evaluation จากสมาชิกคนอื่น
    // --------------------------------------------------

    if (evaluations.length === 0) {
      return this.emptyEvaluationResult(
        member.id,
        member.name,
      );
    }

    // --------------------------------------------------
    // Calculate Average Scores
    // --------------------------------------------------

    const totalResponsibility =
      evaluations.reduce(
        (sum, evaluation) =>
          sum +
          evaluation.responsibility,
        0,
      );

    const totalCommunication =
      evaluations.reduce(
        (sum, evaluation) =>
          sum +
          evaluation.communication,
        0,
      );

    const totalTeamwork =
      evaluations.reduce(
        (sum, evaluation) =>
          sum +
          evaluation.teamwork,
        0,
      );

    const totalQuality =
      evaluations.reduce(
        (sum, evaluation) =>
          sum +
          evaluation.quality,
        0,
      );

    const count =
      evaluations.length;

    const responsibility =
      totalResponsibility / count;

    const communication =
      totalCommunication / count;

    const teamwork =
      totalTeamwork / count;

    const quality =
      totalQuality / count;

    // --------------------------------------------------
    // Average Score
    // --------------------------------------------------

    const averageScore =
      (responsibility +
        communication +
        teamwork +
        quality) /
      4;

    // --------------------------------------------------
    // Convert to Percentage
    // --------------------------------------------------

    const percentage =
      (averageScore / 5) * 100;

    const scores = {
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
    };

    const insight =
      this.generateInsight(
        scores,
      );

    return {
      memberId:
        member.id,

      memberName:
        member.name,

      totalEvaluations:
        count,

      scores,

      averageScore: Number(
        averageScore.toFixed(2),
      ),

      percentage: Number(
        percentage.toFixed(2),
      ),

      insight,
    };
  }

  // ======================================================
  // Analyze All Members in a Project
  // ======================================================

  async analyzeProjectEvaluations(
    projectId: string,
  ) {
    // --------------------------------------------------
    // ตรวจสอบ Project
    // --------------------------------------------------

    const project =
      await this.prisma.project.findUnique({
        where: {
          id: projectId,
        },
      });

    if (!project) {
      throw new NotFoundException(
        'Project not found',
      );
    }

    // --------------------------------------------------
    // ดึงสมาชิกทั้งหมด
    // --------------------------------------------------

    const members =
      await this.prisma.member.findMany({
        where: {
          projectId,
        },

        orderBy: {
          name: 'asc',
        },
      });

    // --------------------------------------------------
    // ไม่มีสมาชิก
    // --------------------------------------------------

    if (members.length === 0) {
      return {
        projectId,

        projectName:
          project.name,

        team: {
          totalMembers: 0,
          evaluatedMembers: 0,
          totalEvaluations: 0,
          averageScore: 0,
          averagePercentage: 0,
        },

        members: [],
      };
    }

    // --------------------------------------------------
    // Calculate Each Member
    // --------------------------------------------------

    const memberResults =
      await Promise.all(
        members.map(
          async (member) => {
            const evaluations =
              await this.prisma.peerEvaluation.findMany(
                {
                  where: {
                    // --------------------------------
                    // สมาชิกที่ถูกประเมิน
                    // Prisma ใช้ targetMemberId
                    // --------------------------------
                    targetMemberId:
                      member.id,

                    // --------------------------------
                    // ต้องเป็นสมาชิกคนอื่น
                    // ห้ามประเมินตัวเอง
                    // --------------------------------
                    evaluatorId: {
                      not: member.id,
                    },
                  },

                  include: {
                    evaluator: true,
                  },

                  orderBy: {
                    createdAt: 'desc',
                  },
                },
              );

            // ------------------------------------------
            // ไม่มี Evaluation
            // ------------------------------------------

            if (
              evaluations.length ===
              0
            ) {
              return this.emptyEvaluationResult(
                member.id,
                member.name,
              );
            }

            // ------------------------------------------
            // Calculate
            // ------------------------------------------

            const count =
              evaluations.length;

            const responsibility =
              evaluations.reduce(
                (
                  sum,
                  evaluation,
                ) =>
                  sum +
                  evaluation.responsibility,
                0,
              ) / count;

            const communication =
              evaluations.reduce(
                (
                  sum,
                  evaluation,
                ) =>
                  sum +
                  evaluation.communication,
                0,
              ) / count;

            const teamwork =
              evaluations.reduce(
                (
                  sum,
                  evaluation,
                ) =>
                  sum +
                  evaluation.teamwork,
                0,
              ) / count;

            const quality =
              evaluations.reduce(
                (
                  sum,
                  evaluation,
                ) =>
                  sum +
                  evaluation.quality,
                0,
              ) / count;

            const averageScore =
              (responsibility +
                communication +
                teamwork +
                quality) /
              4;

            const percentage =
              (averageScore / 5) *
              100;

            const scores = {
              responsibility:
                Number(
                  responsibility.toFixed(
                    2,
                  ),
                ),

              communication:
                Number(
                  communication.toFixed(
                    2,
                  ),
                ),

              teamwork:
                Number(
                  teamwork.toFixed(
                    2,
                  ),
                ),

              quality:
                Number(
                  quality.toFixed(
                    2,
                  ),
                ),
            };

            const insight =
              this.generateInsight(
                scores,
              );

            return {
              memberId:
                member.id,

              memberName:
                member.name,

              totalEvaluations:
                count,

              scores,

              averageScore:
                Number(
                  averageScore.toFixed(
                    2,
                  ),
                ),

              percentage:
                Number(
                  percentage.toFixed(
                    2,
                  ),
                ),

              insight,
            };
          },
        ),
      );

    // ==================================================
    // Team Evaluation Summary
    // ==================================================

    const totalEvaluations =
      memberResults.reduce(
        (sum, member) =>
          sum +
          member.totalEvaluations,
        0,
      );

    const evaluatedMembers =
      memberResults.filter(
        (member) =>
          member.totalEvaluations >
          0,
      );

    // --------------------------------------------------
    // Average Score
    // --------------------------------------------------

    const averageScore =
      evaluatedMembers.length > 0
        ? evaluatedMembers.reduce(
            (sum, member) =>
              sum +
              member.averageScore,
            0,
          ) /
          evaluatedMembers.length
        : 0;

    // --------------------------------------------------
    // Average Percentage
    // --------------------------------------------------

    const averagePercentage =
      evaluatedMembers.length > 0
        ? evaluatedMembers.reduce(
            (sum, member) =>
              sum +
              member.percentage,
            0,
          ) /
          evaluatedMembers.length
        : 0;

    // ==================================================
    // Return
    // ==================================================

    return {
      projectId,

      projectName:
        project.name,

      team: {
        totalMembers:
          members.length,

        evaluatedMembers:
          evaluatedMembers.length,

        totalEvaluations,

        averageScore:
          Number(
            averageScore.toFixed(2),
          ),

        averagePercentage:
          Number(
            averagePercentage.toFixed(
              2,
            ),
          ),
      },

      members:
        memberResults,
    };
  }
}