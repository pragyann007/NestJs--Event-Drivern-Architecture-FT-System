import { Body, Controller, Delete, Get, Param, Post, Query, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { POSTDTO } from './dto/post.dto';
import { PostService } from './providers/post.service';
import { GetPostDTO } from './dto/getPostBase.dto';
import { ActiveUser } from 'src/auth/decorators/get-users.decorator';
import { ActiveUserData } from 'src/auth/interfaces/active-users.interface';

@ApiTags('Posts') // Good practice: groups your endpoints visually in Swagger UI
@Controller('posts')
export class PostsController {
    constructor(
        private readonly postService:PostService
    ){}
    
    @ApiOperation({ summary: 'Create a new blog post' }) // Optional: Only write this to add business context
    @Post()
    createPosts(@Body() postData: POSTDTO) {
        return this.postService.createPosts(postData);
    }
    // many post ---> single user ....


    @Get()
    getAllPosts(@ActiveUser("email") user,@Query() getQueryDTO:GetPostDTO){
        console.log("token from req body",user)
        return this.postService.getAllPosts();
    }
    @Get("{/:id}")
    getOnePosts(@Param("id") id:string , @Query() getQueryDTO:GetPostDTO){
        console.log(getQueryDTO,typeof getQueryDTO);
        return this.postService.getPostofUser(getQueryDTO,id);
    }

    @Delete("/:id")
    deletePost(@Param("id") id:string){
        return this.postService.deletePost(id)
    }
}
