import { IsJSON, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class MetaOptionsDTO {
    @IsJSON()
    @IsNotEmpty()
    metaOptions:string
}