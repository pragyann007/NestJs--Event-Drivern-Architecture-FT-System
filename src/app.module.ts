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
    BullBoardModule.forRoot({
      route:"/queues",
      adapter:ExpressAdapter
    }),
    QueueModules,
  
    OrderModule,
    InventoryModule,
    NotifcationModule,
    AuditModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
