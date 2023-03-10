import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { UserEntity } from 'src/entities/user.entity';
import { BaseRepository } from 'src/repositories/base.repository';
import { UnitOfWorkFactory } from 'src/repositories/factories/unit-of-work.factory';
import { BASE_REPOSITORY } from 'src/repositories/interface/base.interface.repository';
import { USER_REPOSITORY } from 'src/repositories/interface/user/user.interface';
import { UserRepository } from 'src/repositories/repository/user/user.repository';
import { BaseService } from 'src/services/service/base.service';
import { UserService } from 'src/services/service/user/user.service';
import { ENTITY, UNIT_OF_WORK_FACTORY, USER_ENTITY, USER_SERVICE } from 'src/utilities/contants/provider.contants';
import { EntityManager } from 'typeorm';
import { BaseModule } from '../base.module';

@Module({
    imports: [
        BaseModule
    ],
    controllers: [
        UserController
    ],
    providers: [
        {
            useValue: UnitOfWorkFactory,
            provide: UNIT_OF_WORK_FACTORY
        },
        {
            useValue: BaseRepository,
            provide: BASE_REPOSITORY
        },
        {
            useValue: UserEntity,
            provide: USER_ENTITY
        },
        {
            useClass: UserService,
            provide: USER_SERVICE,
        },
        {
            useClass: UserRepository,
            provide: USER_REPOSITORY,
        },
        
    ],
})

export class UserModule { }
