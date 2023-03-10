import { Inject, Injectable, Scope } from '@nestjs/common';
import { __ } from '@squareboat/nestjs-localization/dist/src/helpers';
import * as argon from 'argon2'
import { IUserService } from 'src/services/interface/user/user.interface';
import { CreateUserDto } from 'src/DTO/user/create.dto';
import { UserEntity } from 'src/entities/user.entity';
import { BaseService } from '../base.service';
import { EntityManager, EntityTarget } from 'typeorm';
import { BASE_REPOSITORY, IBaseRepository } from 'src/repositories/interface/base.interface.repository';
import { UserRepository } from 'src/repositories/repository/user/user.repository';
import { IUserRepository, USER_REPOSITORY } from 'src/repositories/interface/user/user.interface';
import { BaseRepository } from 'src/repositories/base.repository';
import { UNIT_OF_WORK_FACTORY } from 'src/utilities/contants/provider.contants';

@Injectable({
    scope: Scope.REQUEST
})
export class UserService extends BaseService<UserEntity> implements IUserService {

    private readonly userRepository: IUserRepository

    constructor(
        @Inject(UNIT_OF_WORK_FACTORY) unitOfWorkFactory: any,
        @Inject(BASE_REPOSITORY) _baseRepository: IBaseRepository<UserEntity>,
        @Inject(USER_REPOSITORY) private readonly _userRepository: IUserRepository
    ){
        super(unitOfWorkFactory, _baseRepository);
        this.userRepository = _userRepository;
    }

    create(_createUserDto: CreateUserDto) {
        // return this.userRepository.getUser();
        return this.createEntity(_createUserDto)
    }

    async getAll(){
    //     return this.createEntity(_createUserDto)
    }
    
    // private readonly unitOfWork: IUnitOfWork
    // private readonly userRepository: UserRepository

    // constructor(
    //     @Inject("UNIT_OF_WORK_FACTORY") unitOfWorkFactory: any,
    //     @Inject(UserRepository) _userRepository: UserRepository
    // ) {
    //     this.unitOfWork = unitOfWorkFactory.makeUnitOfWork()
    //     this.userRepository = _userRepository
    // }

    // async create(createUserDto: CreateUserDto) {

    //     await this.unitOfWork.start();
        
    //     var data 
    //     var work = () => {
    //         this.userRepository.setUnitOfWorks(this.unitOfWork)
    //         data = this.userRepository.repository.findOne({
    //             where: {
    //                 id: '1'
    //             }
    //         })
    //     }
    //     await this.unitOfWork.complete(work);

    //     return data;
    // }
}