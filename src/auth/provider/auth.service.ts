import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import { UserDTO } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/users.service';
import { timeStamp } from 'console';
import { LoginDTO } from '../dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { match } from 'assert';
import { decode } from 'punycode';
import { VerifyDTO} from '../dto/verify.dto';
import { JwtTokenProvider } from './jwt-token.provider';
import { RefreshTokenProvider } from './refresh-token.provider';
import { RefreshTokenDTO } from '../dto/refres-token.dto';

@Injectable()
export class AuthService{
    constructor(
        private readonly hashProvider:HashingProvider,
        private readonly userService:UsersService,
        private readonly configService:ConfigService,
        private readonly jwtService:JwtService,
        private readonly jwtTokenProvider:JwtTokenProvider,
        private readonly refreshTokenProvider:RefreshTokenProvider
    ){

    }

    async createUser(userData:UserDTO){

        const checkUser = await this.userService.checkDuplicateUsers(userData.email)

        if(checkUser){
            throw new ConflictException("User already exists")
        }
        const hashPassword = await this.hashProvider.hashPassword(userData.password);

        const user = await this.userService.createUser({...userData,password:hashPassword});

      
    

        return {status:"OK",statusCode:201,user}



        
    }

    async refreshToken(refreshTokenDto:RefreshTokenDTO){
        return this.refreshTokenProvider.refreshToken(refreshTokenDto);
    }
    async loginUser(userData:LoginDTO){
        const existingUser = await this.userService.checkDuplicateUsers(userData.email);

        console.log("existinguser",existingUser)
        if(!existingUser){
            throw new NotFoundException("User not found with email");
        }
        

        const matchPass = await this.hashProvider.comparePassword(userData.password,existingUser.password);
        console.log("pasmatch",matchPass)

        if(!matchPass){
            throw new UnauthorizedException("Invalid credentials.");
        }

        // const token = this.jwtService.sign({
        //     sub:existingUser.id,
        //     email:existingUser.email
        // },{
        //     audience:this.configService.get("app.jwtTokenAudience"),
        //     secret:this.configService.get("app.jwtSecret"),
        //     expiresIn:"1h"
        // })
        // console.log("token",token)
        const tokens= await this.jwtTokenProvider.generateTokens(existingUser);



        return tokens ; 



    }

    async verifyUser(userData:VerifyDTO){
        const decodeToken = this.jwtService.decode(userData.token);

        return decodeToken;

    }

}
