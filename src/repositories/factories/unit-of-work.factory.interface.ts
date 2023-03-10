import { IUnitOfWork } from "../interface/unitOfWork/unit-of-work.interface";

export interface IUnitOfWorkFactory {

    makeUnitOfWork(): IUnitOfWork
}