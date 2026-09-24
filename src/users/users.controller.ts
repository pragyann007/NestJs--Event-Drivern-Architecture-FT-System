import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { UserDTO } from "./dtos/user.dto";
import { PatchUserDto } from "./dtos/patch-user-dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UserController {
    constructor(private readonly userservice:UsersService){}
    // Make sure UserDTO is imported and used before PatchUserDto if they are in the same file
    @Post()
    createUser(@Body() userDetails: UserDTO) {
        console.log(userDetails);
        return `Hi ${userDetails.name} of ${userDetails.age}`;
    }

    @Get()
    getOneUser(){
        return this.userservice.getOneUser("12anb")
    }
    @Patch()
    updateUser(@Body() userData: Partial<UserDTO>) {
        console.log(userData);
        return `Hiiii ${userData.name}`;
    }
}
