import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class WorkloadService {
  constructor(private readonly prisma: PrismaService) {}

  async analyzeProjectWorkload(projectId: string) {
    const members = await this.prisma.member.findMany({
      where: {
        projectId,
      },
      include: {
        tasks: true,
        workLogs: true,
      },
    });

    if (members.length === 0) {
  return {
    projectId,

    team: {
      totalMembers: 0,
      totalTasks: 0,
      totalTaskHours: 0,
      totalWorkHours: 0,
      averageTasks: 0,
      averageTaskHours: 0,
      averageWorkHours: 0,
    },

    teamBalance: {
      highestWorkload: 0,
      lowestWorkload: 0,
      workloadDifference: 0,
      balanceStatus: 'BALANCED',
    },

    members: [],
  };
}

       // ----------------------------------------
    // 1. Calculate basic workload data
    // ----------------------------------------

    const workload = members.map((member) => {
      const totalTasks = member.tasks.length;

      const completedTasks = member.tasks.filter(
        (task) => task.status === 'COMPLETED',
      ).length;

      const totalTaskHours = member.tasks.reduce(
        (sum, task) => sum + task.hours,
        0,
      );

      const workLogHours = member.workLogs.reduce(
        (sum, log) => sum + log.hours,
        0,
      );

      // ถ้ายังไม่มีบันทึกเวลา (WorkLog) ให้ใช้ชั่วโมงจากงาน (Task.hours) แทน
      const totalWorkHours =
        member.workLogs.length > 0
          ? workLogHours
          : totalTaskHours;

      // ความคืบหน้าของแต่ละงาน:
      // COMPLETED = 100, IN_PROGRESS = ค่า progress, PENDING = 0
      const taskProgressValues = member.tasks.map((task) => {
        if (task.status === 'COMPLETED') return 100;
        if (task.status === 'IN_PROGRESS') return task.progress;
        return 0;
      });

      const averageProgress =
        totalTasks > 0
          ? taskProgressValues.reduce(
              (sum, value) => sum + value,
              0,
            ) / totalTasks
          : 0;

      return {
        memberId: member.id,
        memberName: member.name,
        totalTasks,
        completedTasks,
        totalTaskHours: Number(totalTaskHours.toFixed(2)),
        totalWorkHours: Number(totalWorkHours.toFixed(2)),
        averageProgress: Number(averageProgress.toFixed(2)),
      };
    });

    // ----------------------------------------
    // 2. Calculate team averages
    // ----------------------------------------

    const totalTeamTasks = workload.reduce(
      (sum, member) => sum + member.totalTasks,
      0,
    );

    const totalTeamTaskHours = workload.reduce(
      (sum, member) => sum + member.totalTaskHours,
      0,
    );

    const totalTeamWorkHours = workload.reduce(
      (sum, member) => sum + member.totalWorkHours,
      0,
    );

    const averageTasks =
      totalTeamTasks / members.length;

    const averageTaskHours =
      totalTeamTaskHours / members.length;

    const averageWorkHours =
      totalTeamWorkHours / members.length;

    // ----------------------------------------
    // 3. Calculate workload percentage
    // ----------------------------------------

    const membersWithWorkload = workload.map((member) => {
      const taskRatio =
        averageTasks > 0
          ? member.totalTasks / averageTasks
          : 0;

      const taskHoursRatio =
        averageTaskHours > 0
          ? member.totalTaskHours / averageTaskHours
          : 0;

      const workHoursRatio =
        averageWorkHours > 0
          ? member.totalWorkHours / averageWorkHours
          : 0;

      // Task Count  = 30%
      // Task Hours  = 40%
      // Work Hours  = 30%

      const workloadRatio =
        taskRatio * 0.30 +
        taskHoursRatio * 0.40 +
        workHoursRatio * 0.30;

      const workloadPercentage =
        workloadRatio * 100;

      let workloadLevel = 'NORMAL';

      if (workloadPercentage < 80) {
        workloadLevel = 'LOW';
      } else if (workloadPercentage > 120) {
        workloadLevel = 'HIGH';
      }

      return {
        ...member,
        workloadPercentage: Number(
          workloadPercentage.toFixed(2),
        ),
        workloadLevel,
      };
    });

    // ----------------------------------------
    // 4. Team Balance Analysis
    // ----------------------------------------

    const workloadPercentages =
      membersWithWorkload.map(
        (member) => member.workloadPercentage,
      );

    const highestWorkload = Math.max(
      ...workloadPercentages,
    );

    const lowestWorkload = Math.min(
      ...workloadPercentages,
    );

    const workloadDifference =
      highestWorkload - lowestWorkload;

    // ----------------------------------------
    // 5. Determine Team Balance Status
    // ----------------------------------------

    let balanceStatus = 'BALANCED';

    if (workloadDifference > 40) {
      balanceStatus = 'IMBALANCED';
    } else if (workloadDifference > 20) {
      balanceStatus = 'SLIGHTLY_IMBALANCED';
    }

    // ----------------------------------------
    // 6. Return result
    // ----------------------------------------

    return {
      projectId,

      team: {
        totalMembers: members.length,

        totalTasks: totalTeamTasks,

        totalTaskHours: Number(
          totalTeamTaskHours.toFixed(2),
        ),

        totalWorkHours: Number(
          totalTeamWorkHours.toFixed(2),
        ),

        averageTasks: Number(
          averageTasks.toFixed(2),
        ),

        averageTaskHours: Number(
          averageTaskHours.toFixed(2),
        ),

        averageWorkHours: Number(
          averageWorkHours.toFixed(2),
        ),
      },

      teamBalance: {
        highestWorkload: Number(
          highestWorkload.toFixed(2),
        ),

        lowestWorkload: Number(
          lowestWorkload.toFixed(2),
        ),

        workloadDifference: Number(
          workloadDifference.toFixed(2),
        ),

        balanceStatus,
      },

      members: membersWithWorkload,
    };
  }
}