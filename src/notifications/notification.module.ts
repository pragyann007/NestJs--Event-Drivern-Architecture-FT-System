import { Module } from "@nestjs/common";
import { NotificationListener } from "./notification.listener";
import { Notificationprocessor } from "./notification.processor";


@Module({
    providers:[Notificationprocessor]
})
export class NotifcationModule{}