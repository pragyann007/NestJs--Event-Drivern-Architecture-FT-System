import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from "@nestjs/event-emitter"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { OrderModule } from './orders/order.module';
import { InventoryModule } from './inventory/inventory.module';
import { NotifcationModule } from './notifications/notification.module';
import { AuditModule } from './audit/audit.module';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { QueueModules } from './queues/queue.module';
import { PaymentModule } from './payments/payment.module';
import { RedisModule } from './common/redis/redis.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { Post } from './posts/post.entity';
import { Tag } from './tags/tag.entity';
import { MetaOption } from './meta-options/meta-option.entity';
import { config } from 'process';
import { PaginationModule } from './common/pagination/pagination.module';
import appConfig from './config/app.config';
import dbConfig from './config/db.config';
const ENV = process.env.NODE_ENV;
console.log(ENV?ENV:"production");
@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard:true,
      delimiter:"."
    }),
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:!ENV?".env":`.env.${ENV}`,
      load:[appConfig,dbConfig]
    }),
    BullModule.forRootAsync(
      {
        useFactory:async()=>{
        return {
          connection:{
            host:"localhost",
            port:6379
          }
        }
        }
 

      }
    ),
    RedisModule,
    BullBoardModule.forRoot({
      route:"/queues",
      adapter:ExpressAdapter
    }),
    QueueModules,
  
    OrderModule,
    InventoryModule,
    NotifcationModule,
    AuditModule,
    PaymentModule,
    UsersModule,
    PostsModule,
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
        type:"postgres",
        // entities:[User,Post,Tag,MetaOption],
        autoLoadEntities:configService.get("database.autoLoadEntities"),
        synchronize:configService.get("database.synchronise"),
        port:configService.get("database.port"),
        username:configService.get("database.username"),
        password:configService.getOrThrow("database.password"),
        database:configService.get("database.name"),
        host:configService.get("database.host")
      
      })
      
   
    }
    ),
    TagsModule,
    MetaOptionsModule,
    PaginationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//  //