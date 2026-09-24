import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import {SwaggerModule,DocumentBuilder } from "@nestjs/swagger"
async function bootstrap() {

  const logger = new Logger("Bootstrap");
  process.on("unhandledRejection",(reason:any)=>{logger.log("Unhandled promise rejection",reason)})
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))

  const config = new DocumentBuilder().setVersion("1.0.0").build();
  const document = SwaggerModule.createDocument(app,config);

  SwaggerModule.setup("api",app,document)
   
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
