import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() dto: CreateActivityDto) {
    return this.activitiesService.create(dto);
  }

  // ==============================
  // BACKFILL
  // ==============================

  // ใช้เปิดจาก Browser ได้
  @Get('backfill')
  backfillGet() {
    return this.activitiesService.backfill();
  }

  // ใช้สำหรับ Postman / Thunder Client
  @Post('backfill')
  backfillPost() {
    return this.activitiesService.backfill();
  }

  // ==============================
  // GET ALL
  // ==============================

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }

  // ==============================
  // GET ONE
  // ==============================

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitiesService.findOne(id);
  }

  // ==============================
  // UPDATE
  // ==============================

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateActivityDto) {
    return this.activitiesService.update(id, dto);
  }

  // ==============================
  // DELETE
  // ==============================

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitiesService.remove(id);
  }
}
