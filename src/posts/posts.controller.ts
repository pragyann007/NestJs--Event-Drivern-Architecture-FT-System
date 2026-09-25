import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { POSTDTO } from './dto/post.dto';

@ApiTags('Posts') // Good practice: groups your endpoints visually in Swagger UI
@Controller('posts')
export class PostsController {
    
    @ApiOperation({ summary: 'Create a new blog post' }) // Optional: Only write this to add business context
    @Post()
    createPosts(@Body() postData: POSTDTO) {
        return "created post success...";
    }
}
