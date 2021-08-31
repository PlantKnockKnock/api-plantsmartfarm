import { Injectable } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { JwtService } from '@nestjs/jwt';
import {User} from "../entities/user.entity"
import { InjectRepository } from '@nestjs/typeorm';
import { RefreshToken } from 'src/entities/refresh-token.entity';
import { Repository } from 'typeorm';

// TODO: 여기다가 유저 검증, 토큰 발급, 토큰 검증
@Injectable()
export class AuthService {
  // export된거 여기다가 쓴다
  constructor(
    private userService: UserService,
    private jwtService:JwtService,
    @InjectRepository(RefreshToken) private tokenRepository: Repository<RefreshToken>
  ) {}


  // TODO: bycrypt
  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);
    if (user && user.user_pw === password) {
      const { user_pw, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUserByToken(username:string) {
    const user = await this.userService.findOne(username);
    if(user) {
      const { user_pw, ...result } = user;
      return result;
    }
    return null
  }

  issueAccessToken(user:User) {
    const payload = { 
      id: user.u_id,
      username: user.user_id, 
      type:'access'
    };
    return this.jwtService.sign(payload, { expiresIn: '1h' })
  }

  issueRefreshToken(user:User) {
    const payload = { 
      id: user.u_id,
      username: user.user_id, 
      type:'refresh'
    };
    return this.jwtService.sign(payload, { expiresIn: '14d' })
  }

  registerRefreshToken(user : User) {
    const refresh_token = this.issueRefreshToken(user);
    let token = new RefreshToken();
    token.user_id = user.u_id;
    token.refresh_token = refresh_token;
    this.tokenRepository.save(token);
  }
}