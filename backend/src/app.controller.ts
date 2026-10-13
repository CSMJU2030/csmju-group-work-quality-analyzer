import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get('health')
  getHealth() {
    return {
      status: 'ok',
      service: process.env.SUBSYSTEM_ID ?? 'csmju-group-work-quality-analyzer',
    };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}