import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { UserEntity } from 'src/entities/user.entity';
import { BaseRepository } from 'src/repositories/base.repository';
import { UnitOfWorkFactory } from 'src/repositories/factories/unit-of-work.factory';
import { BASE_REPOSITORY } from 'src/repositories/interface/base.interface.repository';
import { UserRepository } from 'src/repositories/repository/user/user.repository';
import { BaseService } from 'src/services/service/base.service';
import { UserService } from 'src/services/service/user/user.service';
import { BASE_SERVICE, ENTITY, UNIT_OF_WORK_FACTORY, USER_SERVICE } from 'src/utilities/contants/provider.contants';

@Module({
    imports: [
    ],
    controllers: [
        
    ],
    providers: [
        {
            useValue: UnitOfWorkFactory,
            provide: UNIT_OF_WORK_FACTORY
        },
        {
            useValue: BaseService,
            provide: BASE_SERVICE
        },
        {
            useValue: BaseRepository,
            provide: BASE_REPOSITORY
        },
    ]
})

export class BaseModule { }
