import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: this.configService.get('DATABASE_DRIVER'),
            url: this.configService.get('DATABASE_URL'),
            host: this.configService.get('DATABASE_HOST'),
            port: this.configService.get('DATABASE_PORT'),
            username: this.configService.get('DATABASE_USERNAME'),
            password: this.configService.get('DATABASE_PASSWORD'),
            database: "wcn",
            synchronize: this.configService.get('DATABASE_SYNCHRONIZE'),
            dropSchema: false,
            keepConnectionAlive: true,
            logging: this.configService.get('NODE_ENV') !== 'production',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
            cli: {
                entitiesDir: 'src/entities',
                migrationsDir: 'src/database/migrations',
                subscribersDir: 'subscriber',
            },
            extra: {
                max: this.configService.get('DATABASE_MAX_CONNECTIONS'),
                // ssl: this.configService.get('DATABASE_SSL_ENABLED')
                //     ? {
                //         rejectUnauthorized: this.configService.get(
                //             'DATABASE_REJECT_UNAUTHORIZED',
                //         ),
                //         ca: this.configService.get('DATABASE_CA') ?? undefined,
                //         key: this.configService.get('DATABASE_KEY') ?? undefined,
                //         cert: this.configService.get('DATABASE_CERT') ?? undefined,
                //     }
                //     : undefined,
            }
        } as TypeOrmModuleOptions;
    }
}