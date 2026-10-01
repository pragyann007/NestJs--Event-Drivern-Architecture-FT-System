import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { In, Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Meta } from '@angular/platform-browser';
import { POSTDTO } from '../dto/post.dto';
import { create } from 'domain';
import { TagsService } from 'src/tags/tags.service';
import { PaginationProvider } from 'src/common/pagination/provider/pagination.provider';
import { PaginationQueryDTO } from 'src/common/pagination/dtos/pagination.dto';
import { GetPostDTO } from '../dto/getPostBase.dto';

@Injectable()
export class PostService {
    constructor(
        @Inject(forwardRef(()=>UsersService))
        private readonly userService:UsersService,
        @InjectRepository(Post)
        private readonly postRepiository:Repository<Post>,
        @InjectRepository(MetaOption)
        private readonly metaOptionRepisitory:Repository<MetaOption>,

        private readonly tagsService:TagsService,

        private readonly paginationService:PaginationProvider
    ){}
    
    async createPosts(createPostDTO:POSTDTO){
        const {id,tags,...postData} = createPostDTO;

        let user = await this.userService.getOneUserById(id);
        let tagsLists = await this.tagsService.findALlTags(tags);

        if(!user) return ;  

               
        let post = this.postRepiository.create({
            ...postData,
            author:user,
            tags:tagsLists
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
            {relations:{author:true,tags:true}}
            )
            ;
        return posts;

    }

    async getOnePost(id:string){
        const posts = await this.postRepiository.findOneBy({id}) ;
        

        return {findPostFromPostsId:posts}
       }
    async getPostofUser(getPostDTO:GetPostDTO,userId:string){
        // const user = await this.userService.getOneUserById(userId);
        // return user ; 
        // if(!user) return;
        
        // const posts = await this.postRepiository.findBy({
        //     author:{
        //         id:userId
        //     }
        // })
        const posts = await this.paginationService.paginate(this.postRepiository,{page:getPostDTO.page,limit:getPostDTO.limit});

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
