import { Global, Module } from "@nestjs/common";
import Redis from "ioredis";
import { REDIS_CLIENT } from "./redis.constants";
import { ConfigModule, ConfigService } from "@nestjs/config";


@Global()
@Module({
    imports:[ConfigModule],
    providers:[{
        provide:REDIS_CLIENT,
        inject:[ConfigService],
        useFactory:()=>{
            return  new Redis({
                host:"localhost",
                port:6379
            })
        }
    }],
    exports:[REDIS_CLIENT]

})

export class RedisModule {}