import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import type { Express } from 'express';
import { CloudinaryService } from './providers/cloudinary.service';
import { StorageService } from './storage.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Upload } from './entity/upload.enity';
import { throwError } from 'rxjs';

@Injectable()
export class UploadsService {
    constructor(
        private readonly storageService:StorageService,

        @InjectRepository(Upload)
        private readonly fileUploadRepiository:Repository<Upload>
    ){}

    async uplaodFile(file:Express.Multer.File){
        console.log("fp2")


        if(!["image/gif","image/jpeg","image/jpg","image/png"].includes(file.mimetype)){
            throw new BadRequestException("Mime Type ot suppported")
        }
      
        console.log("fp3")


        try {
            const datas= await this.storageService.upload(file);
            const{name,format,key,size,url} = datas;
            console.log("fp8",url)

    
            const uploadData = this.fileUploadRepiository.create({
                name: name,
                path: url,
                mimeType: file.mimetype,
                size: size.toString(),
            });
            const data = await this.fileUploadRepiository.save(uploadData);

            return {status:201,message:"success",data}
            
    
        } catch (error) {
            console.log(error);
            throw error;
            
        }


    }
}
