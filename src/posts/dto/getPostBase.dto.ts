import { IntersectionType } from "@nestjs/swagger";
import { IsDate, IsObject, IsOptional } from "class-validator"
import { PaginationQueryDTO } from "src/common/pagination/dtos/pagination.dto";

class GetBasePost{
    @IsObject()
    @IsDate()
    @IsOptional()
    startDate?:Date;

    @IsObject()
    @IsDate()
    @IsOptional()

    endDate?:Date;
}

export class GetPostDTO extends IntersectionType(PaginationQueryDTO,GetBasePost){}