import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user.module';

@Module({
  imports: [TypeOrmModule.forRoot(),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
