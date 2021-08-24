import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

// Entity 이고 동시에 DTO 임.
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  u_id: number;

  @IsString()
  @Column()
  user_id : string;

  @IsString()
  @Column()
  user_pw : string;

  @IsString()
  @Column()
  user_nickname : string;
}