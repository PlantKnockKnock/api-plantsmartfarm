import { Controller, Get, Post, Body, Delete, Param, HttpStatus } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService : UserService) {}

  @Get('list')
  async findAll(): Promise<User[]> {
    const userList = await this.userService.findAll();
    return Object.assign({
      success : true,
      data: userList,
      statusCode: 200,
      message: `데이터 조회가 성공적으로 완료되었습니다.`,
    });
  }
  
  @Get(':userId')
  async findOne(@Param('userId') id: string): Promise<User> {
    const foundUser = await this.userService.findOne(id);
    if(foundUser) {
      return Object.assign({
        success : true,
        data: foundUser,
        statusCode: 200,
        message: `데이터 조회가 성공적으로 완료되었습니다.`,
      });
    }

    return Object.assign({
      success : false,
      statusCode: 400,
      message: `해당 유저가 없습니다.`,
    });
    
  }

  @Post()
  async createUser(@Body() user : User) : Promise<string> {
    const isCreate = await this.userService.createUser(user);

    if(isCreate) {
      return Object.assign({
        success : true,
        statusCode : 201,
        messge : "saved successfully", 
      });
    }

    return Object.assign({
      success : false,
      statusCode : HttpStatus.FORBIDDEN,
      message : "이미 등록한 사용자입니다."
    })
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') id: string): Promise<string> {
    const isDelete = await this.userService.deleteUser(id);
    if(isDelete) {
      return Object.assign({
        success : true,
        data: { user_id: id },
        statusCode: 201,
        message: `deleted successfully`,
      });
    }

    return Object.assign({
      success : false,
      statusCode: 400,
      message: `해당 유저가 없습니다.`,
    });
    
  }
}
