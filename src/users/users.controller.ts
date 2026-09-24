import { Body, Controller, DefaultValuePipe, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { UserDTO } from "./dtos/user.dto";
import { PatchUserDto } from "./dtos/patch-user-dto";
import { UsersService } from "./users.service";
import { ApiParam, ApiProperty, ApiResponse } from "@nestjs/swagger"

@Controller("users")
export class UserController {
    constructor(private readonly userservice:UsersService){}
    // Make sure UserDTO is imported and used before PatchUserDto if they are in the same file
    @Post()
    createUser(@Body() userDetails: UserDTO) {
        console.log(userDetails);
        return `Hi ${userDetails.name} of ${userDetails.age}`;
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
        return this.userservice.getOneUser(id)
    }
    @Patch()
    updateUser(@Body() userData: Partial<UserDTO>) {
        console.log(userData);
        return `Hiiii ${userData.name}`;
    }
}
