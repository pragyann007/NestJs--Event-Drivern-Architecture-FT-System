import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express"

import type {Express} from "express"
import { UploadsService } from './uploads.service';
@Controller('uploads')
export class UploadsController {
    constructor(
        private readonly uploadService:UploadsService
    ){

    }
    @UseInterceptors(FileInterceptor("file"))
    @Post()
    public uploadFile(@UploadedFile("file") file:Express.Multer.File){
        return this.uploadService.uplaodFile(file);


    }
}
