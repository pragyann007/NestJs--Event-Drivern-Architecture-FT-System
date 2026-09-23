import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { UserDTO } from "./dtos/user.dto";
import { PatchUserDto } from "./dtos/patch-user-dto";

@Controller("users")
export class UserController {
    // Make sure UserDTO is imported and used before PatchUserDto if they are in the same file
    @Post()
    createUser(@Body() userDetails: UserDTO) {
        console.log(userDetails);
        return `Hi ${userDetails.name} of ${userDetails.age}`;
    }

    @Patch()
    updateUser(@Body() userData: Partial<UserDTO>) {
        console.log(userData);
        return `Hiiii ${userData.name}`;
    }
}
