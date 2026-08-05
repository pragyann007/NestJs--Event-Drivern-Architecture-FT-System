import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
import { Job } from "bullmq";
import { OrderCreatedEvent } from "src/orders/events/order-created.events";
import { ORDER_EVENTS } from "src/orders/events/order-events.constants";
import { QUEUE_NAME } from "src/queues/queue.constants";
import { PaymentGatewayService } from "./payment-gateway.services";
import { IdempotencyService } from "./idempotency.services";


const idempotency_ttl_seconds = 60*60*24 ; 

@Processor(QUEUE_NAME.PAYMENT_QUEUE)
export class PaymentProcesor extends WorkerHost{
    private logger = new Logger(PaymentProcesor.name)

    constructor(
        private readonly paymentGatewayService:PaymentGatewayService,
        private readonly idempotencyService:IdempotencyService
    ){
        super()
    }

    async process(job:Job<OrderCreatedEvent,void,string>):Promise<void>{


        if(job.name!==ORDER_EVENTS.CREATED) {return }

        const event = job.data;

        const idempotencyKey = `idempotency:${event.orderId}`;


        const isNewResservation = await this.idempotencyService.resserve(idempotencyKey,idempotency_ttl_seconds)


        if(!isNewResservation){
            this.logger.warn(   `order areaday has resserved or completed payment`);
            return ;  
        }

        this.logger.log(`payment procesing , ${job.id}`)


try {
            this.paymentGatewayService.charge(event.orderId,event.total)
    
} catch (error) {
    await this.idempotencyService.release(idempotencyKey);
    
}

        // simulating failure after charge
        if(job.attemptsMade === 0){
            console.log("errorr is wrwee ")
            throw new Error("Failed to persist payment after charge")
        }


        this.logger.log("payment confirmed")

        await Promise.resolve(null)

    }
}