import { Injectable, Logger } from "@nestjs/common";
import { randomUUID } from "crypto";

export interface ChargeRecord {
    transactionId :string;
    orderId:string;
    charge:number;
    chargedAt:Date;
}

@Injectable()
export class PaymentGatewayService {

    private logger= new Logger(PaymentGatewayService.name)
    private readonly charges:ChargeRecord[] =[]

    charge(orderId:string,charge:number):ChargeRecord{
        const record:ChargeRecord={
            transactionId:randomUUID(),
            orderId,
            charge,
            chargedAt:new Date()
        }
        this.charges.push(record)

        this.logger.log(`Charged ${record.charge} for ${record.orderId}`)

        return record ; 
    }

}