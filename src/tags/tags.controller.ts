import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagDTO } from './dto/tags.dto';

@Controller('tags')
export class TagsController {
    constructor(
        private readonly tagsService:TagsService
    ){}
    @Post()
    async createTags(@Body() createTagDTO:TagDTO){
        return this.tagsService.createTags(createTagDTO);

    }
    
    @Get()
    async getTags(){
        return this.tagsService.findTags();
    }
}
