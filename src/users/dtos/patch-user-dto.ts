import { PartialType } from "@nestjs/mapped-types";
import { UserDTO } from "./user.dto"; // Direct file import path

export class PatchUserDto extends PartialType(UserDTO) {}
