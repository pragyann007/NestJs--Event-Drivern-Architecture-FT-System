// cloudinary.provider.ts
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import { config } from 'process';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: (configService: ConfigService) => {
    const cloudName = configService.getOrThrow<string>(
      "app.cloudinaryCloudName",
    );
  
    const apiKey = configService.getOrThrow<string>(
      "app.cloudinaryApiKey",
    );
  
    const apiSecret = configService.getOrThrow<string>(
      "app.cloudinaryApiSecret",
    );
  
    console.log({
      cloudName,
      apiKeyPresent: Boolean(apiKey),
      apiSecretPresent: Boolean(apiSecret),
    });
  
    return cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });
  },
  inject:[ConfigService]
};
