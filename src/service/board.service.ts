import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from '../entities/board.entity';
import { Repository } from 'typeorm';


@Injectable()
export class BoardService {
    constructor(@InjectRepository(Board) private boardRepository: Repository<Board>) {
        this.boardRepository = boardRepository;
    }

    findAll(): Promise<Board[]> {
        return this.boardRepository.find();
    }

    findOne(id: number): Promise<Board> {
        return this.boardRepository.findOne({ c_id : id });
    }

    async createBoard(board : Board): Promise<Board> {
        const isExist = await this.findOne(board.c_id);
        if(isExist) {
            return null;
        }        
        return await this.boardRepository.save(board);
    }

    // async deleteUser(id: string): Promise<boolean> {
    //     const isExist = await this.findOne(id);
    //     if(isExist) {
    //         await this.boardRepository.delete({ user_id: id });
    //         return true;
    //     }  
    //     return false;
    // }
}
