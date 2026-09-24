import { Controller, Get } from '@nestjs/common';
import { PostService } from './providers/post.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService:PostService){}
    @Get()
    getAlposts(){
        return this.postService.getAllPosts();
    }
}
