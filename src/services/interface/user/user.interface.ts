import { CreateUserDto } from "src/DTO/user/create.dto";

export interface IUserService {
    create(createUserDto: CreateUserDto);
    getAll();
}