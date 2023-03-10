
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { AppDataSource } from 'src/database/data-source';
import { User } from 'src/decorator/user.decorator';
import { CreateUserDto } from 'src/DTO/user/create.dto';
import { UserEntity } from 'src/entities/user.entity';
import { BaseRepository } from 'src/repositories/base.repository';
import { IUnitOfWork } from 'src/repositories/interface/unitOfWork/unit-of-work.interface';
import { IUserRepository } from 'src/repositories/interface/user/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> implements IUserRepository {

    protected repo: Repository<UserEntity>

    constructor() {
        super(UserEntity);
    }

    public setUnitOfWork(_unitOfWork: IUnitOfWork): void {
        try {
            this.repo = _unitOfWork.getRepository(UserEntity)

        } catch (e) {
            console.log(e);
        }
    }

    repository(): Repository<UserEntity> {
        return this.repo
    }

    create(): Promise<string> {
        throw new Error('Method not implemented.');
    }

    async getUser()//: Promise<UserEntity[]>
    {
        return this.getAll()
        // return "wkwkwk"
        // return await this.repo.find()
    }

}