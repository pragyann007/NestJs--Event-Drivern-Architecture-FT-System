

import { Logger } from "@nestjs/common";

const logger  = new Logger("EventListenerError")
export async  function SafeListner(
    listenerName:string,
    eventName:string,
    fn:()=>Promise<void>


):Promise<void>{
    try {
        await fn()
        
    } catch (error) {
        const err = error as Error ; 

        logger.error(`
            Error at :
            ${listenerName} of ${eventName}`,err.message,err.stack)
        
    }

}