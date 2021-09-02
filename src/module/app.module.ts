import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user.module';
import { AuthModule } from './auth.module';
import { BoardModule } from './board.module';

@Module({
  imports: [TypeOrmModule.forRoot(),UserModule,AuthModule,BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
