import { IsOptional, IsString, IsUrl } from "class-validator";

export class TagDTO{

    @IsString()
    name:string
    @IsString()

    slug:string;
    @IsString()

    @IsOptional()
    description?:string;
    @IsString()
    @IsOptional()

    schema?:string
    @IsString()
    @IsUrl()
@IsOptional()
    featuredImageUri:string;


}