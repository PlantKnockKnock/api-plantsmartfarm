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
    // 데이터 형식을 DTO 로 정의하고 측정 값 형식을 number로 할것
    let temperature : string = data.temperature;
    let humidity : string = data.humidity;
    return "온도 : " + temperature + "°C 습도 : " + humidity + "%";
  }
}
