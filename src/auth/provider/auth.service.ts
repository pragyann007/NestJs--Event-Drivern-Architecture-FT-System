import { ConflictException, Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import { UserDTO } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/users.service';
import { timeStamp } from 'console';

@Injectable()
export class AuthService{
    constructor(
        private readonly hashProvider:HashingProvider,
        private readonly userService:UsersService
    ){

    }

    async createUser(userData:UserDTO){

        const checkUser = await this.userService.checkDuplicateUsers(userData.email)

        if(checkUser){
            throw new ConflictException("User already exists")
        }
        const hashPassword = await this.hashProvider.hashPassword(userData.password);

        const user = await this.userService.createUser({...userData,password:hashPassword});

        // jwt code heree 
    

        return {status:"OK",statusCode:201,user}



        
    }

}
