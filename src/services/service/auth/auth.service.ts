import { Injectable } from '@nestjs/common';
import { __ } from '@squareboat/nestjs-localization/dist/src/helpers';
import { UserEntity } from 'src/entities/user.entity';
import { IBaseRepository } from 'src/repositories/interface/base.interface.repository';

@Injectable()
export class AuthService {

    private readonly baseRepository: IBaseRepository<UserEntity>

    constructor(
        _baseRepository: IBaseRepository<UserEntity>,
    ) {
        this.baseRepository = _baseRepository
    }

    findAll(): string {
        return this.baseRepository.getAll();
    }

}