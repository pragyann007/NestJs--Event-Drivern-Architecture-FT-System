import { Module } from "@nestjs/common"
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { QueueModules } from "src/queues/queue.module";

@Module({
    imports:[QueueModules],
    controllers:[OrderController],
    providers:[OrderService],
    exports:[OrderService]
})

export class OrderModule{}