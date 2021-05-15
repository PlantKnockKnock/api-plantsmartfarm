import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/temperature")
  showTemperature(@Body() data)
  {
    return "온도 : " + data.temperature + "℃ 습도 : " + data.humidity;
  }
}
