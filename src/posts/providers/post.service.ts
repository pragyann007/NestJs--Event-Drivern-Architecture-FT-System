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
        const {id,...postData} = createPostDTO;

        let user = await this.userService.getOneUserById(id);

        if(!user) return ; 

               
        let post = this.postRepiository.create({
            ...postData,
            author:user
        });
         post = await this.postRepiository.save(post);
        
        
        
      
        return {
            status:"OK",
            statusCode:201,
            message:"Created..",
            data:post
        }


    }
    async getAllPosts(){
        /** we can get nested mtaoptions by adding relations->metaOptions->true */
        const posts = await this.postRepiository.find(
            // {relations:{metaOptions:true}}
            {relations:{author:true}}
            )
            ;
        return posts;

    }

    async getOnePost(id:string){
        const posts = await this.postRepiository.findOneBy({id}) ;
        

        return {findPostFromPostsId:posts}
       }
    async getPostofUser(userId:string){
        // const user = await this.userService.getOneUserById(userId);
        // return user ; 
        // if(!user) return;
        
        const posts = await this.postRepiository.findBy({
            author:{
                id:userId
            }
        })

        return posts;


    }
    getPostName(){
        return "I just got macbook at age of mid 18"
    }

    async deletePost(id:string){
        const post = await this.postRepiository.findOneBy({id});

        await this.postRepiository.delete(id);
        if(!post?.metaOptions?.id){
            return "No id exists"
        }

        await this.metaOptionRepisitory.delete(post?.metaOptions?.id);
        return {status:"OK",deleted:true,statusCode:200,postId:id,metaOptionsId:post.metaOptions.id}
    }

}
