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
@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard:true,
      delimiter:"."
    }),
    ConfigModule.forRoot(),
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
      useFactory:()=>({
        type:"postgres",
        entities:[User],
        synchronize:true,
        port:5432,
        username:"postgres",
        password:"password",
        database:"mydb",
        host:"localhost"
      
      })
    }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//  //