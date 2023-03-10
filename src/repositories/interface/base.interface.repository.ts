import { Repository } from 'typeorm';
import { IUnitOfWork } from './unitOfWork/unit-of-work.interface';

export const BASE_REPOSITORY = 'BASE_REPOSITORY';

export interface IBaseRepository<E> {

    create(): Promise<string>;
    setUnitOfWork(_unitOfWork: IUnitOfWork): void;
    getAll()//: Promise<E[]>
    repository(): Repository<E>;
}