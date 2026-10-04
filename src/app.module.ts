import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { PrismaModule } from './prisma/prisma.module.js';
import { ProjectsModule } from './projects/projects.module.js';
import { MembersModule } from './members/members.module.js';
import { TasksModule } from './tasks/tasks.module.js';
import { WorkLogsModule } from './work-logs/work-logs.module.js';
import { ActivitiesModule } from './activities/activities.module.js';
import { EvaluationsModule } from './evaluations/evaluations.module.js';
import { ReportsModule } from './modules/reports/reports.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,
    ProjectsModule,
    MembersModule,
    TasksModule,
    WorkLogsModule,
    ActivitiesModule,
    EvaluationsModule,
    ReportsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}