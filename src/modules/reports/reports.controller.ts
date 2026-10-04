import { Controller, Get, Param } from '@nestjs/common';
import { ContributionService } from './contribution.service.js';
import { WorkloadService } from './workload.service.js';
import { PeerEvaluationService } from './peer-evaluation.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Controller('reports')
export class ReportsController {
  constructor(
    private readonly contributionService: ContributionService,
    private readonly workloadService: WorkloadService,
    private readonly peerEvaluationService: PeerEvaluationService,
    private readonly prisma: PrismaService,
  ) {}

  // ----------------------------------------
  // Member Contribution
  // ----------------------------------------

  @Get('contribution/:memberId')
  async getMemberContribution(
    @Param('memberId') memberId: string,
  ) {
    return this.contributionService.calculateMemberContribution(
      memberId,
    );
  }

  // ----------------------------------------
  // Project Workload
  // ----------------------------------------

  @Get('workload/:projectId')
  async getProjectWorkload(
    @Param('projectId') projectId: string,
  ) {
    return this.workloadService.analyzeProjectWorkload(
      projectId,
    );
  }

  // ----------------------------------------
  // Member Peer Evaluation
  // ----------------------------------------

  @Get('peer-evaluation/:memberId')
  async getMemberPeerEvaluation(
    @Param('memberId') memberId: string,
  ) {
    return this.peerEvaluationService.analyzeMemberEvaluation(
      memberId,
    );
  }

  // ----------------------------------------
  // Project Peer Evaluations
  // ----------------------------------------

  @Get('peer-evaluations/:projectId')
  async getProjectPeerEvaluations(
    @Param('projectId') projectId: string,
  ) {
    return this.peerEvaluationService.analyzeProjectEvaluations(
      projectId,
    );
  }

  // ----------------------------------------
  // Reports Summary
  // ----------------------------------------

  @Get('summary/:projectId')
  async getReportsSummary(
    @Param('projectId') projectId: string,
  ) {
    const workload =
      await this.workloadService.analyzeProjectWorkload(
        projectId,
      );

    const peerEvaluations =
      await this.peerEvaluationService.analyzeProjectEvaluations(
        projectId,
      );

    const members = await this.prisma.member.findMany({
      where: {
        projectId,
      },
    });

    const contributions = await Promise.all(
      members.map((member) =>
        this.contributionService.calculateMemberContribution(
          member.id,
        ),
      ),
    );

    return {
      projectId,

      summary: {
        totalMembers: members.length,
        totalTasks: workload.team.totalTasks,
        totalWorkHours: workload.team.totalWorkHours,
        teamBalance: workload.teamBalance.balanceStatus,
        averagePeerEvaluation:
          peerEvaluations.team.averagePercentage,
      },

      contributions,

      workload,

      peerEvaluations,
    };
  }
}