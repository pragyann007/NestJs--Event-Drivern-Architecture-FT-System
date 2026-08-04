import { Injectable,Logger } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { SafeListner } from "src/common/utils/safeListener";
import { OrderCreatedEvent } from "src/orders/events/order-created.events";
import { ORDER_EVENTS } from "src/orders/events/order-events.constants";

@Injectable()
export class InventoryListener{
    private readonly logger  = new Logger(InventoryListener.name)


    @OnEvent(ORDER_EVENTS.CREATED)
    async handleOrderCreated(event:OrderCreatedEvent):Promise<void>{
        await SafeListner(InventoryListener.name,ORDER_EVENTS.CREATED,()=>{
            throw new Error("Oops inventory service denied to resolve request, server failure")

            this.logger.log(`
                    Resserving stocks for the order of ${event.orderId} having ${event.items.length} 
                `)
    
    
                for (const item of event.items){
                    this.logger.log(`
    
                        -->resserved ${item.qty} X productName : ${item.name}
                        
                            `)
                }
    
                this.logger.log("Stock resservation completed ");
        })


       
    }
}