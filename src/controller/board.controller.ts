import { Controller, Request, Post, UseGuards, Get, Body, HttpStatus } from '@nestjs/common';
import { Board } from 'src/entities/board.entity';
import { BoardService } from '../service/board.service'

// TODO: 로그인, 회원가입, 토큰 리프레쉬
@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get('list')
  async getBoardList () {
    const posts = await this.boardService.findAll();
    return {
      success : true,
      statusCode : 200,
      posts : posts
    };
  }

  // 사용자 토큰(jwt) 받은뒤에 user정보를 받고 등록 시켜야함
  @Post('enroll')
  async registerBoard(@Body() board : Board) {
    const isCreate = await this.boardService.createBoard(board);

    if(isCreate) {
      return {
        success : true,
        statusCode : 201,
        messge : "saved successfully", 
      };
    }

    return {
      success : false,
      statusCode : HttpStatus.FORBIDDEN,
      message : "이미 등록한 게시물입니다."
    };
  }
}