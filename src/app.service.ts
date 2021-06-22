import { Injectable } from '@nestjs/common';
import { TemperatureDto } from './dto/temperature.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'api-plantsmartfarm 작동 성공!!!';
  }

  processTemperatureAndHumidity(data : TemperatureDto) : String
  {
     let temperature : number = data.temperature;
     let humidity : number = data.humidity;
     return "온도 : " + temperature + "°C 습도 : " + humidity + "%";
  }
}
