import { Module } from "@nestjs/common";
import { InventoryListener } from "./inventory.listener";
import { OrderModule } from "src/orders/order.module";
import { InventoryProcessor } from "./inventory.processor";

@Module(
    {
        providers:[InventoryProcessor]
    }
)

export class InventoryModule{}
