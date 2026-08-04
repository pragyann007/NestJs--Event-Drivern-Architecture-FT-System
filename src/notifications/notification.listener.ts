import { Injectable,Logger } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { SafeListner } from "src/common/utils/safeListener";
import { OrderCreatedEvent } from "src/orders/events/order-created.events";
import { ORDER_EVENTS } from "src/orders/events/order-events.constants";


@Injectable()
export class NotificationListener{

    private  logger = new Logger(NotificationListener.name)

    @OnEvent(ORDER_EVENTS.CREATED)
    async handleOrderCreatedNotifcation(event:OrderCreatedEvent){

       await SafeListner(NotificationListener.name,ORDER_EVENTS.CREATED,async()=>{
        this.logger.log(`Processing in app notifcation for the ${event.orderId} for ${event.items.length} items... `)


        this.logger.log(`Confirmation Mail sent too ....`)

       }
       )
    }
}