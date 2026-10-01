import { IntersectionType } from "@nestjs/swagger";
import { IsDate, IsObject } from "class-validator"
import { PaginationQueryDTO } from "src/common/pagination/dtos/pagination.dto";

class GetBasePost{
    @IsObject()
    @IsDate()
    startDate?:Date;

    @IsObject()
    @IsDate()
    endDate?:Date;
}

export class GetPostDTO extends IntersectionType(PaginationQueryDTO,GetBasePost){}