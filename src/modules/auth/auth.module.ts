import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { UserEntity } from 'src/entities/user.entity';
import { BaseRepository } from 'src/repositories/base.repository';
import { BASE_REPOSITORY } from 'src/repositories/interface/base.interface.repository';
import { AuthService } from 'src/services/service/auth/auth.service';

@Module({
    imports: [
        JwtModule.register({}),
    ],
    controllers: [AuthController],
    providers: [AuthService,
        {
            useValue: BaseRepository,
            provide: BASE_REPOSITORY
        },
    ],
    exports: [AuthService]
})

export class AuthModule {}