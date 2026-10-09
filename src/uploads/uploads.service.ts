import { Injectable } from '@nestjs/common';
import type { Express } from 'express';

@Injectable()
export class UploadsService {

    async uplaodFile(file:Express.Multer.File){

    }
}
