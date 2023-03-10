import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";
import { UserEntity } from "src/entities/user.entity";
import { BaseEntity } from "src/serializer/base.entity";
import { DeepPartial, EntityTarget, Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { IBaseRepository } from "./interface/base.interface.repository";
import { IUnitOfWork } from "./interface/unitOfWork/unit-of-work.interface";

@Injectable()
export abstract class BaseRepository<E extends BaseEntity> implements IBaseRepository<E> {

    protected repo: Repository<E>

    constructor(
        private readonly entity: EntityTarget<E>,
    ) {}

    setUnitOfWork(_unitOfWork: IUnitOfWork): void {
        console.log("tessssssssssssssssssssssssssss")
        try {

            this.repo = _unitOfWork.getRepository(this.entity)

        } catch (e) {
            console.log(e);
        }
    }

    repository(): Repository<E> {
        return this.repo
    }

    create(): Promise<string> {
        throw new Error('Method not implemented.');
    }

    getAll() {
        return "wkwk123"
        // return await this.repo.find()
    }

    // constructor() {
    //     // this.unitOfWork = UnitOfWorkFactory.makeUnitOfWork('typeorm');
    // }

    // async get(id: string, relations: string[] = [], throwException: boolean = false): Promise<K | null> {
    //     return await this.repository.findOne({
    //         // where: {
    //         //     id
    //         // },
    //         relations
    //     })
    //         .then(entity => {

    //             if (!entity && throwException) {
    //                 return Promise.reject(
    //                     new NotFoundException("Model Not Found")
    //                 )
    //             }

    //             return Promise.resolve(entity ? this.transform(entity) : null)
    //         })
    //         .catch(error => Promise.reject(error))
    // }

    // async get(id: string, relations: string[] = [], throwException: boolean = false): Promise<K | null>{
    //     return await this.repository.findOne({
    //         // where: {
    //         //     id
    //         // },
    //         relations
    //     })
    //     .then(entity => {

    //         if(!entity && throwException){
    //             return Promise.reject(
    //                 new NotFoundException("Model Not Found")
    //             )
    //         }

    //         return Promise.resolve(entity ? this.transform(entity) : null)
    //     })
    //     .catch(error => Promise.reject(error))
    // }

    // async createEntity(inputs: DeepPartial<T>, relations: string[] = []): Promise<K> {
    //     return this.repository.save(inputs)
    //         .then(async entity => 
    //             await this.get((entity as any).id,
    //                 relations
    //             )
    //         )
    //         .catch(error => Promise.reject(error))
    // }

    // async updateEntity(entity: K, inputs: QueryDeepPartialEntity<T>, relations: string[] = []): Promise<K> {
    //     return this.repository.update(entity.id, inputs)
    //         .then(async () => 
    //             this.get((entity as any).id, relations)
    //         )
    //         .catch(error => Promise.reject(error))
    // }

    // private transform(model: T, transformOptions = {}): K {
    //     return plainToClass(BaseEntity, model, transformOptions) as K;
    // }

    // private transformMany(models: T[], transformOptions = {}): K[] {
    //     return models.map(model => this.transform(model, transformOptions))
    // }

}