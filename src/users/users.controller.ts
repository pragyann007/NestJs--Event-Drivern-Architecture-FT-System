import {Controller,Get, Param, Query} from "@nestjs/common"

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
}

// http://localhost:3000/users/1/?userName=Pragyan