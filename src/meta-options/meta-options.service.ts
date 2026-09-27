import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { Repository } from 'typeorm';
import { Meta } from '@angular/platform-browser';
import { MetaOptionsDTO } from './dto/metaOptions.dto';
import { create } from 'domain';

@Injectable()
export class MetaOptionsService {
    constructor(
        @InjectRepository(MetaOption)
        private readonly metaOptionRepiository:Repository<MetaOption>
    ){}

    async createMetaOptions(createMetaOptionsDTO:MetaOptionsDTO){
        console.log(createMetaOptionsDTO)

        let data = this.metaOptionRepiository.create({
            metaValue:createMetaOptionsDTO.metaValue
        })
        data = await this.metaOptionRepiository.save(data)
        return {
            status:"OK",
            statusCode:201,
            message:"MetaOptions created sucessfully!",
            data
        }

    }
}
