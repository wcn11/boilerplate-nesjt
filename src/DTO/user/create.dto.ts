import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsInt()
    readonly id: number;

    @IsString()
    readonly name: string;

    @IsEmail()
    @IsString()
    readonly email: string;

    @IsString()
    readonly password: string;
}