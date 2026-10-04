import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkLogDto } from './dto/create-work-log.dto';
import { UpdateWorkLogDto } from './dto/update-work-log.dto';

@Injectable()
export class WorkLogsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateWorkLogDto) {
    return this.prisma.workLog.create({
      data: {
        hours: dto.hours,
        description: dto.description,
        workDate: new Date(dto.workDate),
        memberId: dto.memberId,
        taskId: dto.taskId,
      },
    });
  }

  async findAll() {
    return this.prisma.workLog.findMany({
      include: {
        member: true,
        task: true,
      },
      orderBy: {
        workDate: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const workLog = await this.prisma.workLog.findUnique({
      where: { id },
      include: {
        member: true,
        task: true,
      },
    });

    if (!workLog) {
      throw new NotFoundException('Work log not found');
    }

    return workLog;
  }

  async update(id: string, dto: UpdateWorkLogDto) {
    await this.findOne(id);

    return this.prisma.workLog.update({
      where: { id },
      data: {
        hours: dto.hours,
        description: dto.description,
        workDate: dto.workDate
          ? new Date(dto.workDate)
          : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.workLog.delete({
      where: { id },
    });
  }
}