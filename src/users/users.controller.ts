import { Body, Controller, DefaultValuePipe, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { UserDTO } from "./dtos/user.dto";
import { PatchUserDto } from "./dtos/patch-user-dto";
import { UsersService } from "./users.service";
import { ApiParam, ApiProperty, ApiResponse } from "@nestjs/swagger"
import { AuthGuard } from "src/auth/guards/auth/auth.guard";
import { Authentication } from "src/auth/decorators/auth.decorator";
import { AuthType } from "src/auth/enums/Auth-Type.enum";

@Controller("users")
export class UserController {
    constructor(private readonly userservice:UsersService){}
    // Make sure UserDTO is imported and used before PatchUserDto if they are in the same file
    @Authentication(AuthType.NONE)
    @Post()
    createUser(@Body() userDetails: UserDTO) {
        console.log(userDetails);
        return this.userservice.createUser(userDetails)
    }

    @ApiProperty({
        description:"This api returns the users with the user ifd that is sent from the params.."
    })
    @ApiParam({
        name:"id",
        example:"abc12ka",
        description:"The valid user Id",
        required:false
    })
    @ApiResponse({
        status:200,
        example:{
            id:"abc12ka",
            name:"Pragyan"
        }
    })
    @Get("/:id")
    getOneUser(@Param("id",new DefaultValuePipe("abcpragyan")) id:string){
        return this.userservice.getOneUserById(id)
    }
    @Patch()
    updateUser(@Body() userData: Partial<UserDTO>) {
        console.log(userData);
        return `Hiiii ${userData.name}`;
    }

    @Get()
    @UseGuards(AuthGuard)
    async getALlUsers (){
        return this.userservice.getALlUsers() ; 
    }
}
