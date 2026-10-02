import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './provider/auth.service';
import { LoginDTO } from './dto/login.dto';
import { VerifyDTO } from './dto/verify.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post("/register")
    async register(@Body() createUserDTO:UserDTO){
        return await this.authService.createUser(createUserDTO);
    }
    @Post("/login")
    async login(@Body() userDTO:LoginDTO){
        console.log("okokcontrolelrlogin")
        return await this.authService.loginUser(userDTO);
    }

    @Post("/verify")
    async verify(@Body() data:VerifyDTO){
        return this.authService.verifyUser(data);
    }
}
