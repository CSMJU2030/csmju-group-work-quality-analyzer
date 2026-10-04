import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'CSMJU TeamWork Analytics API is running';
  }
}
