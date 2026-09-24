import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostService {
    constructor(private readonly userService:UsersService
    ){}
    
    getAllPosts(){
        return "ALl post getted "

    }
    getPostofUser(userId:string){
        const user = this.userService.getOneUser(userId);
        return user ; 


    }
    getPostName(){
        return "I just got macbook at age of mid 18"
    }
}
