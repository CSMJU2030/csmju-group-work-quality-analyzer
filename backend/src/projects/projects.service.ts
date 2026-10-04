import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
  return this.prisma.project.findMany({
    orderBy: { createdAt: 'asc' },
    include: {
      members: { select: { id: true } },
      tasks: { select: { id: true } },
    },
  });
}

  async findOne(id: string) {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new NotFoundException('ไม่พบโครงงาน');
    }

    return project;
  }

  create(dto: CreateProjectDto) {
    const name = dto.name?.trim();

    if (!name) {
      throw new BadRequestException('กรุณากรอกชื่อโครงงาน');
    }

    return this.prisma.project.create({
      data: {
        name,
        description: dto.description?.trim() || null,
      },
    });
  }

  async update(id: string, dto: UpdateProjectDto) {
    await this.findOne(id);

    if (dto.name !== undefined && !dto.name.trim()) {
      throw new BadRequestException('ชื่อโครงงานต้องไม่ว่าง');
    }

    return this.prisma.project.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.description !== undefined && {
          description: dto.description?.trim() || null,
        }),
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    try {
      return await this.prisma.project.delete({ where: { id } });
    } catch (error) {
      // P2003 = Foreign key constraint (ยังมีสมาชิก/งานผูกอยู่)
      if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      error.code === 'P2003'
    )  {
        throw new ConflictException(
          'ไม่สามารถลบโครงงานที่ยังมีสมาชิกหรืองานเชื่อมโยงอยู่',
        );
      }
      throw error;
    }
  }
}