import { Injectable } from "@nestjs/common";
import { AppDataSource } from "src/database/data-source";
import { IUnitOfWork } from "../interface/unitOfWork/unit-of-work.interface";
import { UnitOfWork } from "../repository/unitOfWork/unit-of-work";

@Injectable()
export class UnitOfWorkFactory {

    static makeUnitOfWork(): IUnitOfWork {

        return new UnitOfWork(AppDataSource);
        
    }
    
}