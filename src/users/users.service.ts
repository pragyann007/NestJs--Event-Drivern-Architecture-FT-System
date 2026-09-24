import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getOneUser(userId:string){
        return {id:userId,name:"Pragyan"}
    }
}
