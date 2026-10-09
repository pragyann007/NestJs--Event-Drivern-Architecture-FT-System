
import type { Express } from "express";
import { UploadResposne } from "./interface/upload-response.interface";
export abstract class StorageService{

    abstract upload(file:Express.Multer.File):Promise<UploadResposne>;


}