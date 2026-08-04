import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from "@nestjs/event-emitter"
import { ConfigModule } from "@nestjs/config"
import { OrderModule } from './orders/order.module';
import { InventoryModule } from './inventory/inventory.module';
import { NotifcationModule } from './notifications/notification.module';
import { AuditModule } from './audit/audit.module';
@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard:true,
      delimiter:"."
    }),
    ConfigModule.forRoot(),
    OrderModule,
    InventoryModule,
    NotifcationModule,
    AuditModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
