import {IsEmail, IsNumber, IsPositive, IsString, isString, MIN, MinLength} from "class-validator"

export class UserDTO{

    @IsString()
    @MinLength(6)
    name:string

    @IsEmail()
    @MinLength(2)
    email:string

    @IsString()
    password:string

    @IsNumber()
    @IsPositive()
    age:string

}