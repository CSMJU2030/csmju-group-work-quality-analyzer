import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEvaluationDto } from './dto/create-evaluation.dto.js';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto.js';

@Injectable()
export class EvaluationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateEvaluationDto) {
    return this.prisma.peerEvaluation.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.peerEvaluation.findMany({
      include: {
        evaluator: true,
        targetMember: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const evaluation = await this.prisma.peerEvaluation.findUnique({
      where: { id },
      include: {
        evaluator: true,
        targetMember: true,
      },
    });

    if (!evaluation) {
      throw new NotFoundException('Evaluation not found');
    }

    return evaluation;
  }

  async update(id: string, dto: UpdateEvaluationDto) {
    await this.findOne(id);

    return this.prisma.peerEvaluation.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.peerEvaluation.delete({
      where: { id },
    });
  }
}