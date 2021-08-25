import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
        this.userRepository = userRepository;
    }

    //User 리스트 조회  
    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    // 특정 유저 조회
    findOne(id: string): Promise<User> {
        return this.userRepository.findOne({ user_id: id });
    }

    // 유저 회원가입
    async createUser(user : User): Promise<User> {
        const isExist = await this.findOne(user.user_id);
        if(isExist) {
            return null;
        }        
        return await this.userRepository.save(user);
    }

    // 유저 삭제
    async deleteUser(id: string): Promise<boolean> {
        const isExist = await this.findOne(id);
        if(isExist) {
            await this.userRepository.delete({ user_id: id });
            return true;
        }  
        return false;
    }
}
