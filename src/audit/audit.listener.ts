import { Injectable, Logger } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { OrderCreatedEvent } from "src/orders/events/order-created.events";
import { ORDER_EVENTS } from "src/orders/events/order-events.constants";
import { AuditlogEntry } from "./audit-log";
import { SafeListner } from "src/common/utils/safeListener";

@Injectable()

export class AuditListener{
    private logger = new Logger(AuditListener.name);
    private readonly Entries:AuditlogEntry[] = [];

    @OnEvent(ORDER_EVENTS.CREATED)
   async handleOrderNameSpaceEvent(payload:OrderCreatedEvent){
    await SafeListner(AuditListener.name,ORDER_EVENTS.CREATED,async ()=>{
        const entry:AuditlogEntry={
            orderId:payload.orderId,
            summary:`Order of ${payload.orderId} having ${payload.items.length} of total ${payload.total}`,
            eventNameSpace:"order.*",
            captureAT:new Date()
        }
    
        this.Entries.push(entry);
        this.logger.log("Audit entry logged..")

    })

   

   }

   findAll():AuditlogEntry[]{
    return this.Entries ;
   }
}