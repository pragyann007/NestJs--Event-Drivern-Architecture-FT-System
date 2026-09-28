import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { POSTDTO } from './dto/post.dto';
import { PostService } from './providers/post.service';

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
    getAllPosts(){
        return this.postService.getAllPosts();
    }
    @Get("/:id")
    getOnePosts(@Param("id") id:string){
        return this.postService.getPostofUser(id);
    }

    @Delete("/:id")
    deletePost(@Param("id") id:string){
        return this.postService.deletePost(id)
    }
}
