import { Inject, Injectable } from "@nestjs/common";
import { OrderItemDTO } from "../dto/orders.dto";

@Injectable()
export class OrderCreatedEvent {
    constructor(
        public readonly orderId:string,
        public readonly userId:string,
        public readonly items:OrderItemDTO[],
        public readonly total:number,
        public readonly occuredAt:Date = new Date()
    ){}
}