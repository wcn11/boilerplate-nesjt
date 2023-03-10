import { UnitOfWorkModule } from './modules/unitOfWork/unitofwork.module';

import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';

import { LoggerMiddleware } from './middleware/logger.middleware';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import * as path from 'path';
import { LocalizationModule } from '@squareboat/nestjs-localization/dist/src';

import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RolesGuard } from './guards/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { DataSource } from 'typeorm';
import { BaseModule } from './modules/base.module';
import { BaseRepository } from './repositories/base.repository';
import { BASE_REPOSITORY } from './repositories/interface/base.interface.repository';

@Module({
  imports: [
    AuthModule,
    BaseModule,
    UnitOfWorkModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    LocalizationModule.register({
      path: path.join(__dirname, "/resources/lang/"),
      fallbackLang: 'en',
    }),
    // TypeOrmModule.forRootAsync({
    //   useClass: TypeOrmConfigService,
    //   dataSourceFactory: async (options) => {
    //     const dataSource = await new DataSource(options).initialize();
    //     return dataSource;
    //   },
    // }),
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      useValue: BaseRepository,
      provide: BASE_REPOSITORY
    },
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
      .forRoutes("user")
    consumer.apply(LoggerMiddleware)
      .forRoutes("person")
  }

}
