import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './provider/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post("/register")
    async register(@Body() createUserDTO:UserDTO){
        return await this.authService.createUser(createUserDTO);
    }
}
