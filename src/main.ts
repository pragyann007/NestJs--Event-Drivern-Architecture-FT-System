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

  const config = new DocumentBuilder().setVersion("1.0.0")
  .setTitle("Event Driven Architecture App").setDescription("This is the nest s backend api that gives the hands on expeience with the how the event driven system works how is the event being emited how persistance works etc etc ...").addServer("http://localhost:3000").setLicense("MIT","http://github.com/pragyann007").build();
  const document = SwaggerModule.createDocument(app,config);

  SwaggerModule.setup("api",app,document)
   
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
