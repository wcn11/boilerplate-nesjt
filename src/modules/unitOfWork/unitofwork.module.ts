/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'src/database/data-source';
import { TypeOrmConfigService } from 'src/database/typeorm-config.service';
import { UnitOfWorkFactory } from 'src/repositories/factories/unit-of-work.factory';
import { UNIT_OF_WORK } from 'src/repositories/interface/unitOfWork/unit-of-work.interface';
import { UnitOfWork } from 'src/repositories/repository/unitOfWork/unit-of-work';
import { DataSource } from 'typeorm';

@Module({
    imports: [
        // UnitOfWork

        // TypeOrmModule.forRootAsync({
        //     useClass: TypeOrmConfigService,
        //     dataSourceFactory: async (options) => {
        //         const dataSource = await new DataSource(options).initialize()
        //         return dataSource;
        //     },
        // }),
    ],
    controllers: [],
    providers: [
        
        // {
        //     useClass: UnitOfWork,
        //     provide: UNIT_OF_WORK,
        // },
    ]
})
export class UnitOfWorkModule {}
