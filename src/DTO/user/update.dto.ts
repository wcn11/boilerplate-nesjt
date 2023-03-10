import { IsString, IsInt, IsEmail } from 'class-validator';

export class UpdateUserDto {
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsEmail()
    @IsString()
    email: number;

    @IsString()
    password: string;
}