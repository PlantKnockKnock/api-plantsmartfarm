import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 파라미터 보안성을 위한 제약
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidNonWhitelisted : true,
    transform : true
  }));
  await app.listen(process.env.PORT || 3000);   // 헤로쿠가 동적 포트 할당할수 있도록 설정
}
bootstrap();
