import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entity 이고 동시에 DTO 임.
@Entity('refresh_tokens')
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  refresh_token : string;
}