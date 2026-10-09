import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import { CloudinaryProvider } from './providers/cloudinary.provider';
import { CloudinaryService } from './providers/cloudinary.service';
import { StorageService } from './storage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upload } from './entity/upload.enity';

@Module({
  imports:[TypeOrmModule.forFeature([Upload])],
  controllers: [UploadsController],
  providers: [UploadsService,CloudinaryProvider,{
    provide:StorageService,
    useClass:CloudinaryService
  }],
  exports:[StorageService]
})
export class UploadsModule { }
