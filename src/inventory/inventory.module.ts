import { Module } from "@nestjs/common";
import { InventoryListener } from "./inventory.listener";
import { OrderModule } from "src/orders/order.module";

@Module(
    {
        providers:[InventoryListener]
    }
)

export class InventoryModule{}
