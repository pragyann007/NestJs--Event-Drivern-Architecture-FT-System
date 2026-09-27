import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './meta-options.service';
import { MetaOptionsDTO } from './dto/metaOptions.dto';

@Controller('meta-options')
export class MetaOptionsController {
    constructor(
        private readonly metaOptionsService:MetaOptionsService
    ){}
    @Post()
    createMetaOptions(@Body() metaOptionData:MetaOptionsDTO){
        return this.metaOptionsService.createMetaOptions(metaOptionData)
    }
}
