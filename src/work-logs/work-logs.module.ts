import { Module } from '@nestjs/common';
import { WorkLogsController } from './work-logs.controller.js';
import { WorkLogsService } from './work-logs.service.js';

@Module({
  controllers: [WorkLogsController],
  providers: [WorkLogsService],
})
export class WorkLogsModule {}