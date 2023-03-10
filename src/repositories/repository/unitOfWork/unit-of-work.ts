import { Inject } from "@nestjs/common";
import { AppDataSource } from "src/database/data-source";
import { IUnitOfWork } from "src/repositories/interface/unitOfWork/unit-of-work.interface";
import { DataSource, QueryRunner, EntityManager, Repository, EntityTarget, ObjectLiteral } from "typeorm";

export class UnitOfWork implements IUnitOfWork {
    private readonly asyncDatabaseConnection: DataSource;
    private readonly queryRunner: QueryRunner;
    private transactionManager: EntityManager;
    static connection: DataSource;

    constructor(
        @Inject(AppDataSource) asyncDatabaseConnection: DataSource,
    ) {
        this.asyncDatabaseConnection = asyncDatabaseConnection;
        this.queryRunner = this.asyncDatabaseConnection.createQueryRunner();
    }

    setTransactionManager() {
        this.transactionManager = this.queryRunner.manager;
    }

    async start() {

        try{
            this.setTransactionManager();
            await this.queryRunner.startTransaction();
        }catch(err){
            console.log(err);
        }

    }

    getRepository(entity: EntityTarget<ObjectLiteral>): Repository<ObjectLiteral> {

        if (!this.transactionManager) {
            this.start()
        }

        return this.transactionManager.getRepository(entity)

    }

    async complete(work: () => void) {
        try {
             work();
            await this.queryRunner.commitTransaction();
        } catch (error) {
            await this.queryRunner.rollbackTransaction();
            throw `Error occur when trying commit transaction: ${error}`;
        } finally {
            await this.queryRunner.release();
        }
    }
}