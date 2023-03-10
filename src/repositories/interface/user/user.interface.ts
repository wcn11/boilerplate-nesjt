import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { IUnitOfWork } from "../unitOfWork/unit-of-work.interface";

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {

    create(): Promise<string>;
    setUnitOfWork(_unitOfWork: IUnitOfWork): void;
    getUser()//: Promise<UserEntity[]>
    repository(): Repository<UserEntity>;
}