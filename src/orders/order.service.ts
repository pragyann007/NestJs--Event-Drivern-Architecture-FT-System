import {Injectable} from "@nestjs/common"
import { CreateOrderDTO } from "./dto/orders.dto";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { randomUUID } from "crypto";
import { ORDER_EVENTS } from "./events/order-events.constants";
import { OrderCreatedEvent } from "./events/order-created.events";

@Injectable()

export class OrderService{

 private orderItems: CreateOrderDTO[] = [];
 constructor(
    private readonly EventEmitter:EventEmitter2
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

    this.EventEmitter.emit(ORDER_EVENTS.CREATED,
        new OrderCreatedEvent(orderItems.orderId,orderItems.userId,orderItems.items,orderItems.total)
    )

    return {
        message:"created",
        orderItems
    }


}

}