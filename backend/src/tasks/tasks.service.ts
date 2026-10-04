import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTaskDto) {
    const task = await this.prisma.task.create({
      data: dto,
    });

    if (task.memberId) {
      await this.prisma.activity.create({
        data: {
          action: `สร้างงาน "${task.title}"`,
          projectId: task.projectId,
          memberId: task.memberId,
          taskId: task.id,
        },
      });
    }

    return task;
  }

  async findAll() {
    return this.prisma.task.findMany({
      include: {
        member: true,
        project: true,
        workLogs: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: {
        member: true,
        project: true,
        workLogs: true,
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  async update(id: string, dto: UpdateTaskDto) {
    const oldTask = await this.findOne(id);

    const task = await this.prisma.task.update({
      where: { id },
      data: dto,
    });

    const memberId = task.memberId ?? oldTask.memberId;

    if (memberId) {
      if (dto.status !== undefined && dto.status !== oldTask.status) {
        await this.prisma.activity.create({
          data: {
            action: `เปลี่ยนสถานะงาน "${task.title}" เป็น ${getStatusLabel(dto.status)}`,
            projectId: task.projectId,
            memberId,
            taskId: task.id,
          },
        });
      }

      if (dto.progress !== undefined && dto.progress !== oldTask.progress) {
        await this.prisma.activity.create({
          data: {
            action: `อัปเดตความคืบหน้างาน "${task.title}" เป็น ${dto.progress}%`,
            projectId: task.projectId,
            memberId,
            taskId: task.id,
          },
        });
      }

      const otherFieldsChanged =
        dto.title !== undefined ||
        dto.description !== undefined ||
        dto.category !== undefined ||
        dto.hours !== undefined ||
        dto.priority !== undefined ||
        dto.memberId !== undefined;

      if (
        otherFieldsChanged &&
        dto.status === undefined &&
        dto.progress === undefined
      ) {
        await this.prisma.activity.create({
          data: {
            action: `แก้ไขงาน "${task.title}"`,
            projectId: task.projectId,
            memberId,
            taskId: task.id,
          },
        });
      }
    }

    return task;
  }

  async remove(id: string) {
    const task = await this.findOne(id);

    if (task.memberId) {
      await this.prisma.activity.create({
        data: {
          action: `ลบงาน "${task.title}"`,
          projectId: task.projectId,
          memberId: task.memberId,
          taskId: null,
        },
      });
    }

    return this.prisma.task.delete({
      where: { id },
    });
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'COMPLETED':
      return 'เสร็จแล้ว';

    case 'IN_PROGRESS':
      return 'กำลังดำเนินการ';

    case 'PENDING':
      return 'รอดำเนินการ';

    default:
      return status;
  }
}
