import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TemperatureDto } from './dto/temperature.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 일단 온습도 값 표시를 위한 테스트용
  @Post("/temperature")
  showTemperature(@Body() data : TemperatureDto)
  {
    return this.appService.processTemperatureAndHumidity(data);
  }
}
