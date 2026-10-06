import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(
    private readonly reportsService: ReportsService,
  ) {}

  @Get('contribution/:memberId')
  getContribution(
    @Param('memberId') memberId: string,
  ) {
    return this.reportsService.getContribution(
      memberId,
    );
  }

  @Get('workload/:projectId')
  getWorkload(
    @Param('projectId') projectId: string,
  ) {
    return this.reportsService.getWorkload(
      projectId,
    );
  }

  @Get('peer-evaluations/:projectId')
  getPeerEvaluations(
    @Param('projectId') projectId: string,
  ) {
    return this.reportsService.getPeerEvaluations(
      projectId,
    );
  }

  @Get('summary/:projectId')
  getSummary(
    @Param('projectId') projectId: string,
  ) {
    return this.reportsService.getSummary(
      projectId,
    );
  }
}