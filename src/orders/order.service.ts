import {Injectable, Logger} from "@nestjs/common"
import { CreateOrderDTO } from "./dto/orders.dto";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { randomUUID } from "crypto";
import { ORDER_EVENTS } from "./events/order-events.constants";
import { OrderCreatedEvent } from "./events/order-created.events";
import { InjectQueue } from "@nestjs/bullmq";
import { QUEUE_NAME } from "src/queues/queue.constants";
import { Queue } from "bullmq";

let options = {
    attempts:3,
    backOff:{
        type:"exponential",
        delay:2000,
    },
    removeOnComplete:100,
    removeOnFail:false
}

@Injectable()

export class OrderService{

 private orderItems: CreateOrderDTO[] = [];
 private logger  = new Logger()
 constructor(
    @InjectQueue(QUEUE_NAME.ORDER_EVENTS) private readonly orderEventQueue:Queue ,
    @InjectQueue(QUEUE_NAME.INEVNTORY_EVENTS) private readonly inventoryQueue:Queue,
    @InjectQueue(QUEUE_NAME.NOTIFICATION_QUEUE) private readonly notificationQueue:Queue,
    @InjectQueue(QUEUE_NAME.AUDIT_QUEUE) private readonly auditQueue:Queue,


    private readonly EventEmitter:EventEmitter2,

 ){}

async createOrders(dto:CreateOrderDTO){

    let total = dto.items.reduce((acc,item)=>{
        return acc + (item.price * item.qty);
    },0)
    const orderItems = {
        userId:randomUUID(),
        email:dto.email,
        address:dto.address,
        items:dto.items,
        orderId:randomUUID(),
        total

    }
    const orderCreation = this.orderItems.push(orderItems);

    // this.EventEmitter.emit(ORDER_EVENTS.CREATED,
    //     new OrderCreatedEvent(orderItems.orderId,orderItems.userId,orderItems.items,orderItems.total)
    // )

     

    await Promise.all(
        [
            this.inventoryQueue.add(ORDER_EVENTS.CREATED,new OrderCreatedEvent(orderItems.orderId,orderItems.userId,orderItems.items,orderItems.total),options),
            this.notificationQueue.add(ORDER_EVENTS.CREATED,new OrderCreatedEvent(orderItems.orderId,orderItems.userId,orderItems.items,orderItems.total),options),
            this.auditQueue.add(ORDER_EVENTS.CREATED,new OrderCreatedEvent(orderItems.orderId,orderItems.userId,orderItems.items,orderItems.total),options),
        ]

    )
    this.logger.log("event pshed")
    


    return {
        message:"created",
        orderItems
    }


}

}