import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID, ValidateNested } from "class-validator"
import { Type } from "class-transformer"

export class OrderItemDTO {



    @IsString()
    name:string

    @IsNumber()
    @IsPositive()
    qty:number

    @IsNumber()
    @IsPositive()
    price:number

    





    
}


export class CreateOrderDTO{


    @IsEmail()
    email:string

    @IsString()
    address:string

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>OrderItemDTO)
    @IsNotEmpty()
    items:OrderItemDTO[]

}