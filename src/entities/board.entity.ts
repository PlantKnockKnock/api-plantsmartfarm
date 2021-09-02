import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString } from 'class-validator';

// Entity 이고 동시에 DTO 임.
@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  c_id: number;

  @IsNumber()
  @Column()
  u_id : number;

  @IsString()
  @Column()
  title : string;

  @IsString()
  @Column()
  content : string;

  @IsString()
  @Column()
  c_nickname : string;
  
}