import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger("Bootstrap");
  process.on("unhandledRejection",(reason:any)=>{logger.log("Unhandled promise rejection",reason)})
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( 
    new ValidationPipe({
      transform:true,
      whitelist:true,
      forbidNonWhitelisted:true
    })
   )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
