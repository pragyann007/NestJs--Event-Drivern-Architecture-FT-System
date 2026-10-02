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

@Injectable()
export class AuthService{
    constructor(
        private readonly hashProvider:HashingProvider,
        private readonly userService:UsersService,
        private readonly configService:ConfigService,
        private readonly jwtService:JwtService
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

        const token = await this.jwtService.signAsync({
            sub:existingUser.id,
            email:existingUser.email
        },{
            audience:this.configService.get("app.jwtTokenAudience"),
            secret:this.configService.get("app.jwtSecret")
        })
        console.log("token",token)

        return token ; 



    }

    async verifyUser(userData:VerifyDTO){
        const decodeToken = this.jwtService.decode(userData.token);

        return decodeToken;

    }

}
