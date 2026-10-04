import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateActivityDto) {
    return this.prisma.activity.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.activity.findMany({
      include: {
        project: true,
        member: true,
        task: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const activity = await this.prisma.activity.findUnique({
      where: { id },
      include: {
        project: true,
        member: true,
        task: true,
      },
    });

    if (!activity) {
      throw new NotFoundException('Activity not found');
    }

    return activity;
  }

  async update(id: string, dto: UpdateActivityDto) {
    await this.findOne(id);

    return this.prisma.activity.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.activity.delete({
      where: { id },
    });
  }

  // สร้าง History ให้ Task เก่าที่ยังไม่มี Activity
  async backfill() {
    const tasks = await this.prisma.task.findMany({
      include: {
        member: true,
        project: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    const createdActivities = [];

    for (const task of tasks) {
      // ถ้า Task ไม่มีสมาชิก จะสร้าง Activity ไม่ได้
      if (!task.memberId) {
        continue;
      }

      // เช็กก่อนว่ามี Activity ของ Task นี้หรือยัง
      const existingActivity = await this.prisma.activity.findFirst({
        where: {
          taskId: task.id,
        },
      });

      // ถ้ามีแล้ว ไม่สร้างซ้ำ
      if (existingActivity) {
        continue;
      }

      const activity = await this.prisma.activity.create({
        data: {
          action: `สร้างงาน "${task.title}"`,
          projectId: task.projectId,
          memberId: task.memberId,
          taskId: task.id,
        },
        include: {
          project: true,
          member: true,
          task: true,
        },
      });

      createdActivities.push(activity);
    }

    return {
      message: 'Backfill activities completed',
      created: createdActivities.length,
      activities: createdActivities,
    };
  }
}