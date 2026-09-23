import { IsEmail, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class UserDTO {
    @IsString()
    @MinLength(6)
    name: string;

    @IsEmail()
    @MinLength(2)
    email: string;

    @IsString()
    password: string;

    @IsNumber()
    @IsPositive()
    age: number; // Remember to change string to number here to match @IsNumber()
}
