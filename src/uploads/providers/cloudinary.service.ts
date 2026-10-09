import { Inject, Injectable } from "@nestjs/common";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import {v2 as cloudinary} from "cloudinary"
import * as streamifier from "streamifier"
import { StorageService } from "../storage.service";
import { UploadResposne } from "../interface/upload-response.interface";


@Injectable()
export class CloudinaryService implements StorageService {
    constructor(
        @Inject("CLOUDINARY") 
        private readonly cloudinaryConfig
    ){}

    upload(file:Express.Multer.File):Promise<UploadResposne>{
        console.log("fp5")

        return new Promise((resolve,reject)=>{
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder:"nestfolder",
                    
                },
                (error, result) => {
                    if (error) {
                      console.error("Cloudinary upload failed:", {
                        message: error.message,
                        http_code: error.http_code,
                        name: error.name,
                        error,
                      });
                  
                      return reject(error);
                    }
                  
                    if (!result) {
                      return reject(new Error("Upload result is undefined"));
                    }
                  
                    resolve({
                      url: result.secure_url,
                      key: result.public_id,
                      format: result.format,
                      size: result.bytes,
                      name: result.original_filename,
                    });
                  }

            )
            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        })

    }

}