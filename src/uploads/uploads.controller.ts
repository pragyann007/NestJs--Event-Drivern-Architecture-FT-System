import { BadRequestException, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express"

import type {Express} from "express"
import { UploadsService } from './uploads.service';
import { Authentication } from 'src/auth/decorators/auth.decorator';
import { AuthType } from 'src/auth/enums/Auth-Type.enum';
@Controller('uploads')
export class UploadsController {
    constructor(
        private readonly uploadService:UploadsService
    ){

    }

    @UseInterceptors(FileInterceptor("file"))
    @Authentication(AuthType.NONE)
    @Post()
    public uploadFile(@UploadedFile("file") file:Express.Multer.File){
        if(!file){
            throw new BadRequestException("The file is must to pass.")
        }
        console.log("fp1")
        return this.uploadService.uplaodFile(file);


    }
}
