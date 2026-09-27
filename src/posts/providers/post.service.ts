import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Meta } from '@angular/platform-browser';
import { POSTDTO } from '../dto/post.dto';
import { create } from 'domain';

@Injectable()
export class PostService {
    constructor(
        @Inject(forwardRef(()=>UsersService))
        private readonly userService:UsersService,
        @InjectRepository(Post)
        private readonly postRepiository:Repository<Post>,
        @InjectRepository(MetaOption)
        private readonly metaOptionRepisitory:Repository<MetaOption>
    ){}
    
    async createPosts(createPostDTO:POSTDTO){
               
        let post = this.postRepiository.create(createPostDTO);
         post = await this.postRepiository.save(post);
        
        
        
      
        return {
            status:"OK",
            statusCode:201,
            message:"Created..",
            data:post
        }


    }
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
