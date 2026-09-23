import {Body, Controller,Get, Param, Post, Query, ValidationPipe} from "@nestjs/common"
import { UserDTO } from "./dtos/user.dto"

@Controller("users")
export class UserController{
    @Get("/:id/:posts/:comments/:reply")
    getUsers(@Param() param:any){
        console.log(JSON.stringify(param))

        return `Ysers of id hitted`
    }

    @Get("/:id")
    getUserByQuery(@Param("id") id:string,@Query("userName") userName:string){
        return `Hi ${userName} of ${id} id  how are you ?`

    }

    @Post()
    createUser(@Body(new ValidationPipe()) userDetails:UserDTO){
        console.log(userDetails);
        return `Hi ${userDetails.name} of ${userDetails.age}`;

    }
}

// http://localhost:3000/users/1/?userName=Pragyan