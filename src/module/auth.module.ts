import { Module } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { UserModule } from '../module/user.module';
import { LocalStrategy } from '../strategy/local.strategy';
import { JwtStrategy } from '../strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from "../controller/auth.controller"
import { RefreshToken } from 'src/entities/refresh-token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // 유저모듈 임포트
  imports: [
    UserModule, 
    PassportModule,
    // jwt 모듈의 config 설정을 여기서 해줄 수 있다
    // 이걸 임포트했으니 하위의 JwtService를 모듈에서 사용할 수 있다
    JwtModule.register({secret: 'testSecret',}),
    TypeOrmModule.forFeature([RefreshToken])
  ],
  controllers:[AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})

export class AuthModule {}