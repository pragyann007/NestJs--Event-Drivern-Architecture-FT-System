import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
import { Job } from "bullmq";
import { OrderCreatedEvent } from "src/orders/events/order-created.events";
import { ORDER_EVENTS } from "src/orders/events/order-events.constants";
import { QUEUE_NAME } from "src/queues/queue.constants";


@Processor(QUEUE_NAME.NOTIFICATION_QUEUE)
export class Notificationprocessor extends WorkerHost {
    private logger = new Logger(Notificationprocessor.name)

   async process(job:Job<OrderCreatedEvent,void,string>):Promise<void>{
        if(job.name !== ORDER_EVENTS.CREATED){
            return ;
        }

        const event = job.data;
        this.logger.log(`processing workk ${event.orderId} jobattempts : ${job.attemptsMade}`)

        for(const item of event.items){
            this.logger.log(`${item.name}`)
        }


        this.logger.log(`send notdication success`)

        await Promise.resolve(null)
    }

}