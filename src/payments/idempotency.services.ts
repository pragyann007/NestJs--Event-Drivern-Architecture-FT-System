import { Inject, Injectable, Logger } from "@nestjs/common";
import Redis from "ioredis";
import { REDIS_CLIENT } from "src/common/redis/redis.constants";

@Injectable()
export class IdempotencyService {
    private logger = new Logger(IdempotencyService.name)

    constructor(
        @Inject(REDIS_CLIENT) private readonly redisClient:Redis
    ){}

    async resserve(key:string,ttlSeconds:number):Promise<boolean>{
        const result = await this.redisClient.set(key,"1","EX",ttlSeconds,"NX");
        return result === "OK";
    }

    async release(key:string):Promise<void>{
        await this.redisClient.del(key)
        this.logger.warn("Realesd idempotency key ",key)
    }

}