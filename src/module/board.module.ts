import { Module } from '@nestjs/common';
import { BoardController } from '../controller/board.controller';
import { BoardService } from '../service/board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from '../entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  controllers : [BoardController],
  providers: [BoardService,],
  exports : [BoardService]
})

export class BoardModule {}