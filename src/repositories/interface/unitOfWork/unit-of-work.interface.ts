import { EntityTarget, ObjectLiteral, Repository } from "typeorm";

export const UNIT_OF_WORK = 'UNIT_OF_WORK';

export interface IUnitOfWork {

    start(): void;
    complete(work: () => void): Promise<void>;
    getRepository(entity: EntityTarget<ObjectLiteral>);
}