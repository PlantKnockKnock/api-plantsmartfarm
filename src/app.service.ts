import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'api-plantsmartfarm 작동 성공!!!';
  }

  showTemperature(data)
  {
    
  }
}
