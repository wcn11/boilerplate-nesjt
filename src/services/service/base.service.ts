import { forwardRef, Inject, Injectable, Scope } from '@nestjs/common';
import { __ } from '@squareboat/nestjs-localization/dist/src/helpers';
import * as argon from 'argon2'
import { IUnitOfWork } from 'src/repositories/interface/unitOfWork/unit-of-work.interface';
import { IBaseService } from '../interface/base.interface';
import { BaseEntity, EntityTarget } from 'typeorm';
import { BASE_REPOSITORY, IBaseRepository } from 'src/repositories/interface/base.interface.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/repositories/base.repository';
import { UNIT_OF_WORK_FACTORY } from 'src/utilities/contants/provider.contants';
import { IUserRepository, USER_REPOSITORY } from 'src/repositories/interface/user/user.interface';
import { UserRepository } from 'src/repositories/repository/user/user.repository';
import { UserEntity } from 'src/entities/user.entity';

@Injectable({
    scope: Scope.REQUEST
})
export abstract class BaseService<E extends BaseEntity> implements IBaseService {
    private readonly unitOfWork: IUnitOfWork
    // protected baseRepository: IBaseRepository<E>

    constructor(
        @Inject(UNIT_OF_WORK_FACTORY) _unitOfWorkFactory: any,
        private readonly _baseRepository: IBaseRepository<E>,
    ) {
        this.unitOfWork = _unitOfWorkFactory.makeUnitOfWork()
        // this.baseRepository = _baseRepository
    }

    async createEntity(_dto: any): Promise<EntityTarget<E>> {

        await this.unitOfWork.start();

        var entity: EntityTarget<E> | PromiseLike<EntityTarget<E>>

        var work = () => {
            // var repository = this.unitOfWork.getRepository(UserEntity)
            var repository = this._baseRepository.getAll()
            console.log(repository)
            //entity = repository//.create(_dto).save()
        }

        await this.unitOfWork.complete(work);

        return entity;
    }

    // async all()//: Promise<EntityTarget<E>[]> 
    // {

    //     await this.unitOfWork.start();

    //     var entity//: EntityTarget<E>[]

    //     var work = async () => {

    //         this.baseRepository.setUnitOfWork(this.unitOfWork)
    //         entity = await this.baseRepository.getAll()
    //     }

    //     await this.unitOfWork.complete(work);

    //     return entity;
    // }
}