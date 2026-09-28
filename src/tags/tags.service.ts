import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { In, Repository } from 'typeorm';
import { TagDTO } from './dto/tags.dto';
import { create } from 'domain';

@Injectable()

export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagRepiository:Repository<Tag>
    ){}

    public async createTags(createTagDTO:TagDTO){
        const tags = this.tagRepiository.create(createTagDTO);
        return await this.tagRepiository.save(tags);
    }
    public async findALlTags(tags:string[]){
        const result = await this.tagRepiository.find({
            where:{
                id:In(tags)
            }
        })

        return result;

    }
    public async findTags(){
        return await this.tagRepiository.find();
    }
}
