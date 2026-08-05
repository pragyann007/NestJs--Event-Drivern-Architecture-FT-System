import { Module } from "@nestjs/common";
import { PaymentGatewayService } from "./payment-gateway.services";
import { PaymentProcesor } from "./payment.processor";
import { IdempotencyService } from "./idempotency.services";

@Module({
    imports:[],
    providers:[PaymentGatewayService,PaymentProcesor,IdempotencyService],
    exports:[PaymentGatewayService]
})


export class PaymentModule{}