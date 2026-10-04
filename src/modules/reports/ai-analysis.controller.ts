import { Controller, Get, Param } from '@nestjs/common';
import { AiAnalysisService } from './ai-analysis.service.js';

@Controller('reports/ai-analysis')
export class AiAnalysisController {
  constructor(
    private readonly aiAnalysisService: AiAnalysisService,
  ) {}

  @Get(':projectId')
  analyzeProject(@Param('projectId') projectId: string) {
    return this.aiAnalysisService.analyzeProject(projectId);
  }
}