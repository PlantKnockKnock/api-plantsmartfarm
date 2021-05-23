import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 일단 온습도 값 표시를 위한 테스트용
  @Post("/temperature")
  showTemperature(@Body() data)
  {
    let temperature : string = data.temperature;
    let humidity : string = data.humidity;
    console.log("온도 : " + temperature + "°C 습도 : " + humidity + "%");
    return "온도 : " + temperature + "°C 습도 : " + humidity + "%";
  }
}
