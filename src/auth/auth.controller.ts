import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './provider/auth.service';
import { LoginDTO } from './dto/login.dto';
import { VerifyDTO } from './dto/verify.dto';
import { Authentication } from './decorators/auth.decorator';
import { AuthType } from './enums/Auth-Type.enum';
import { RefreshTokenDTO } from './dto/refres-token.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post("/register")
    async register(@Body() createUserDTO:UserDTO){
        return await this.authService.createUser(createUserDTO);
    }
    @Authentication(AuthType.NONE)
    @Post("/login")
    async login(@Body() userDTO:LoginDTO){
        console.log("okokcontrolelrlogin")
        return await this.authService.loginUser(userDTO);
    }


    @Authentication(AuthType.NONE)
    @Post("refresh-token")
    async refreshToken(@Body() refreshTokenDto:RefreshTokenDTO){
        return this.authService.refreshToken(refreshTokenDto);
    }

    @Post("/verify")
    async verify(@Body() data:VerifyDTO){
        return this.authService.verifyUser(data);
    }
}
