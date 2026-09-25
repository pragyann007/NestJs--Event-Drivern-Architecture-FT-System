import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class MetaOptionsDTO {
    @IsString()
    @IsNotEmpty()
    key:string

    @IsOptional()
    value:string
}