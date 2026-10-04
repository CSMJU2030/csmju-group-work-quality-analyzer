import { Module } from '@nestjs/common';

import { ContributionService } from './contribution.service.js';
import { ReportsController } from './reports.controller.js';
import { WorkloadService } from './workload.service.js';
import { PeerEvaluationService } from './peer-evaluation.service.js';

import { AiAnalysisService } from './ai-analysis.service.js';
import { AiAnalysisController } from './ai-analysis.controller.js';

@Module({
  controllers: [
    ReportsController,
    AiAnalysisController,
  ],

  providers: [
    ContributionService,
    WorkloadService,
    PeerEvaluationService,
    AiAnalysisService,
  ],

  exports: [
    ContributionService,
    WorkloadService,
    PeerEvaluationService,
    AiAnalysisService,
  ],
})
export class ReportsModule {}