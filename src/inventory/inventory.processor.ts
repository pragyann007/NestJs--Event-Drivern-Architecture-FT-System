import { WorkerHost,Processor } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
import { Job, QUEUE_EVENT_SUFFIX } from "bullmq";
import { OrderCreatedEvent } from "src/orders/events/order-created.events";
import { ORDER_EVENTS } from "src/orders/events/order-events.constants";
import { QUEUE_NAME } from "src/queues/queue.constants";


@Processor(QUEUE_NAME.INEVNTORY_EVENTS)
export class InventoryProcessor extends WorkerHost {
    private logger = new Logger(InventoryProcessor.name);

    async process(job:Job<OrderCreatedEvent,void,string>):Promise<void>{

        if(job.name !== ORDER_EVENTS.CREATED ){
            // this.logger.error("not mu job"

            console.log(job.name,QUEUE_NAME.INEVNTORY_EVENTS)
            
            return ;
            
        }
        const event = job.data ; 
        this.logger.log(`proessing job ${job.name}`)

        setTimeout(() => {
            this.logger.log("job processed sucesss inventory added ")
            
        }, 3000);

        await Promise.resolve(null)

        }

}