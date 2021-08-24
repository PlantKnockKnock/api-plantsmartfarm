import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entities/user.entity';



@Controller('user')
export class UserController {
  constructor(private readonly userService : UserService) {}

  @Get('list')
  async findAll(): Promise<User[]> {
    const userList = await this.userService.findAll();
    return Object.assign({
      data: userList,
      statusCode: 200,
      statusMessge: `데이터 조회가 성공적으로 완료되었습니다.`,
    });
  }
  @Get(':userId')
  async findOne(@Param('userId') id: string): Promise<User> {
    const foundUser = await this.userService.findOne(id);
    return Object.assign({
      data: foundUser,
      statusCode: 200,
      statusMessge: `데이터 조회가 성공적으로 완료되었습니다.`,
    });
  }

  // 수정 및 업데이트가 둘다 되기 때문에 수정 바람
  @Post()
  async saveUser(@Body() user : User) : Promise<string> {
    console.log("진입");
    await this.userService.saveUser(user);
    return Object.assign({
        data : {...user},
        statusCode : 201,
        statusMessge : "saved successfully", 
    });
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') id: string): Promise<string> {
    await this.userService.deleteUser(id);
    return Object.assign({
      data: { user_id: id },
      statusCode: 201,
      statusMessge: `deleted successfully`,
    });
  }
}
