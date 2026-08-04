import { Body, Controller, Post } from "@nestjs/common"
import { CreateOrderDTO } from "./dto/orders.dto";
import { OrderService } from "./order.service";

@Controller("order")
export class OrderController {

    constructor(
        private readonly orderService:OrderService
    ){}

    @Post()
    createOrder(@Body() dto:CreateOrderDTO ){

        return this.orderService.createOrders(dto)

    }

}