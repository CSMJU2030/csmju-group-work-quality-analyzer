import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { ContributionService } from './contribution.service.js';
import { WorkloadService } from './workload.service.js';
import { PeerEvaluationService } from './peer-evaluation.service.js';

@Injectable()
export class AiAnalysisService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly contributionService: ContributionService,
    private readonly workloadService: WorkloadService,
    private readonly peerEvaluationService: PeerEvaluationService,
  ) {}

  async analyzeProject(projectId: string) {
    const project = await this.prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        members: true,
        tasks: true,
      },
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    const workload =
  await this.workloadService.analyzeProjectWorkload(projectId);

const peerEvaluation =
  await this.peerEvaluationService.analyzeProjectEvaluations(
    projectId,
  );

const contributionResults = await Promise.all(
  project.members.map((member) =>
    this.contributionService.calculateMemberContribution(
      member.id,
    ),
  ),
);

    const insights: string[] = [];
    const recommendations: string[] = [];

    // Project Progress
    const averageProgress =
      project.tasks.length > 0
        ? project.tasks.reduce(
            (sum, task) => sum + (task.progress ?? 0),
            0,
          ) / project.tasks.length
        : 0;

    if (averageProgress < 30) {
      insights.push(
        'Project progress is currently relatively low and should be monitored closely.',
      );

      recommendations.push(
        'Review incomplete tasks and prioritize tasks that are important to the project.',
      );
    } else if (averageProgress < 70) {
      insights.push(
        'Project progress is in progress and some tasks may require additional follow-up.',
      );

      recommendations.push(
        'Continue monitoring task progress and review tasks that have not been updated recently.',
      );
    } else {
      insights.push(
        'Project progress is relatively high based on the current task data.',
      );
    }

    // Contribution
    if (contributionResults.length > 0) {
      const averageContribution =
  contributionResults.reduce(
    (sum: number, item: { contributionScore: number }) =>
      sum + item.contributionScore,
    0,
  ) / contributionResults.length;

      const belowAverageMembers = contributionResults.filter(
  (item: { contributionScore: number }) =>
    item.contributionScore < averageContribution,
);

      if (belowAverageMembers.length > 0) {
        insights.push(
          `${belowAverageMembers.length} member(s) currently have a contribution score below the team average.`,
        );

        recommendations.push(
          'Review task assignments, progress, working hours, and other available evidence for members whose contribution is below the team average.',
        );
      } else {
        insights.push(
          'Current contribution scores do not show a member below the team average.',
        );
      }
    }

    // Workload
    if (workload?.teamBalance) {
      const difference = workload.teamBalance.workloadDifference  ?? 0;

      if (difference > 30) {
        insights.push(
          'There is a noticeable difference in workload between team members.',
        );

        recommendations.push(
          'Review the distribution of tasks and consider redistributing future work where appropriate.',
        );
      } else {
        insights.push(
          'The current workload distribution does not show a large difference between members.',
        );
      }
    }

    // Peer Evaluation
    const peerAverage = peerEvaluation?.team?.averagePercentage ?? 0;

    if (peerAverage > 0 && peerAverage < 60) {
      insights.push(
        'Peer evaluation results indicate that some areas of teamwork may require additional attention.',
      );

      recommendations.push(
        'Review communication, teamwork, responsibility, and work quality together with other project evidence.',
      );
    } else if (peerAverage >= 60) {
      insights.push(
        'Peer evaluation results are generally positive based on the available responses.',
      );
    }

    // No data
    if (
      project.members.length === 0 &&
      project.tasks.length === 0
    ) {
      insights.push(
        'There is not enough project activity data for a meaningful analysis.',
      );

      recommendations.push(
        'Add team members and tasks, then record progress and work activity before reviewing the analysis.',
      );
    }

    return {
      projectId: project.id,
      projectName: project.name,
      generatedAt: new Date().toISOString(),

      summary: {
        memberCount: project.members.length,
        taskCount: project.tasks.length,
        averageProgress: Number(averageProgress.toFixed(2)),
        averagePeerEvaluation: peerAverage,
      },

      insights,
      recommendations,

      note:
        'This analysis is generated from available project data and should be used as supporting information rather than as a definitive judgment of individual members.',
    };
  }
}