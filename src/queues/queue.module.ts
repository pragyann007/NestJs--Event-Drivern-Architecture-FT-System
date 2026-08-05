import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { QUEUE_NAME } from "./queue.constants";
import { BullBoardModule } from "@bull-board/nestjs";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";


@Module({
    imports: [
        BullModule.registerQueue({
            name: QUEUE_NAME.ORDER_EVENTS
        },
            {
                name: QUEUE_NAME.INEVNTORY_EVENTS
            },
            {
                name: QUEUE_NAME.NOTIFICATION_QUEUE
            },
            {
                name: QUEUE_NAME.AUDIT_QUEUE
            },
            {
                name: QUEUE_NAME.PAYMENT_QUEUE
            },

        ),
        BullBoardModule.forFeature({
            name: QUEUE_NAME.ORDER_EVENTS,
            adapter: BullMQAdapter
        }
        ),
        BullBoardModule.forFeature({
            name: QUEUE_NAME.INEVNTORY_EVENTS,
            adapter: BullMQAdapter
        }
        ),
        BullBoardModule.forFeature({
            name: QUEUE_NAME.NOTIFICATION_QUEUE,
            adapter: BullMQAdapter
        }
        ),
        BullBoardModule.forFeature({
            name: QUEUE_NAME.AUDIT_QUEUE,
            adapter: BullMQAdapter
        }
        ),
        BullBoardModule.forFeature({
            name: QUEUE_NAME.PAYMENT_QUEUE,
            adapter: BullMQAdapter
        }
        ),
    ],
    providers: [],
    exports: [BullModule]
})
export class QueueModules { }
