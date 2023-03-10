import { Controller, Get} from '@nestjs/common';
import { AuthService } from 'src/services/service/auth/auth.service';


@Controller("auth")
export class AuthController {

    constructor(private authService: AuthService){
        
    }

    @Get("/")
    async findAll() {
        return this.authService.findAll();
    }
}