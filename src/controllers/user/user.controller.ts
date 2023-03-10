import { Controller, Get, Post, Body, HttpException, HttpStatus, BadRequestException, UseFilters, Param, ParseIntPipe, Put, UsePipes, Delete, UseGuards, UseInterceptors, ConsoleLogger, Inject } from '@nestjs/common';
import { CreateUserDto} from '../../DTO/user/create.dto';
import { UpdateUserDto } from 'src/DTO/user/update.dto';
import { LoginUserDto } from 'src/DTO/user/login.dto';
import { Roles } from 'src/decorator/roles.decorator';
import { JoiValidationPipe } from 'src/pipes/validator.pipe';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { User } from 'src/decorator/user.decorator';
import { UserService } from 'src/services/service/user/user.service';
import { IUserService } from 'src/services/interface/user/user.interface';
import { USER_SERVICE } from 'src/utilities/contants/provider.contants';

@Controller("user")
export class UserController {
    constructor(
        @Inject(USER_SERVICE) private userService: IUserService
    ) {}

    @Post()
    @UseInterceptors(LoggingInterceptor, TransformInterceptor)
    async create(@Body() createUserDto: CreateUserDto){
        return await this.userService.create(createUserDto)
    }

    @Get()
    async findAll() {
        return this.userService.getAll()
    }

    // @Put(":id")
    // async update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
    //     return this.userService.update(id, updateUserDto)
    // }

    // @Get(":id")
    // async findOne(@Param('id', ParseIntPipe) id: number) {
    //     return this.userService.findOne(id)
    // }

    // @Delete(":id")
    // async delete(@Param('id', ParseIntPipe) id: number) {
    //     return this.userService.delete(id)
    // }
}