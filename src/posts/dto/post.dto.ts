import { ArrayNotEmpty, IsArray, IsEnum, IsOptional, IsString, IsISO8601, ValidateNested } from "class-validator"
import { MetaOptionsDTO } from "./metaOptions.dto"
import { Type } from "class-transformer"
import { PostType } from "../types/PostType.enum"
import { Status } from "../types/PostStatus.enum"





export class POSTDTO {
    @IsString()
    title: string

    @IsEnum(PostType)
    postType: PostType

    @IsString()
    slug: string

    @IsEnum(Status)
    status: Status   

    @IsString()
    @IsOptional()
    content?: string // 👈 Added '?' because it is marked optional

    @IsString()
    @IsOptional()
    schema?: string // 👈 Added '?' because it is marked optional

    @IsString()
    @IsOptional()
    featuredImageUri?: string // 👈 Added '?' because it is marked optional

    @IsISO8601() 
    publishOn: Date

    @IsArray()
    @IsString({ each: true })
    @ArrayNotEmpty()
    tags: string[]

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MetaOptionsDTO)
    metaOptions: MetaOptionsDTO[]; 
}