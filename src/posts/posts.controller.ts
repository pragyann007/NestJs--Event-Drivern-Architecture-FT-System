import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './providers/post.service';
import { POSTDTO } from './dto/post.dto';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService:PostService){}
    @Get()
    getAlposts(){
        return this.postService.getAllPosts();
    }

    @ApiProperty({
        name:"Create Posts",
        description:"Creating the post via req body snet by client to the server"
    })
    @ApiResponse({
        status:200,
        example:"created post sucess..."

    })
    @Post()
    createPosts(@Body() postData:POSTDTO){
        console.log(postData)
        return "created post sucess ..."

    }
}
