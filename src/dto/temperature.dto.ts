import { IsNumber } from "class-validator";

export class TemperatureDto
{
    @IsNumber()
    readonly temperature : number;
    @IsNumber()
    readonly humidity : number;
}