import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { UserService } from 'src/service/user.service';
import { User } from 'src/entities/user.entity';

// TODO: 로그인, 회원가입, 토큰 리프레쉬
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService : UserService) {}

  @Post('register')
  public async register (@Body() body : User) {
    const user = await this.userService.createUser(body);
    if (user == null) {
      return {
        sucess : false,
        message : "이미 회원가입된 사용자가 있습니다.",
        statusCode: 401,
      }
    }
    this.authService.registerRefreshToken(user);
    
    const access_token = this.authService.issueAccessToken(user)

    return {
      sucess: true,
      statusCode : 200,
      access_token : access_token,
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return {
      sucess : true,
      statusCode : 200,
      access_token: this.authService.issueAccessToken(req.user),
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}