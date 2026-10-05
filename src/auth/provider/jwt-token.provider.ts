import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.entity";

@Injectable()
export class JwtTokenProvider {

    constructor(
        private readonly configService:ConfigService,
        private readonly jwtService:JwtService
    ){}
    public async signToken<T> (userId:string,exp:string,payload?:T){
        
        const token =  this.jwtService.sign({
            sub: Number(userId),
            ...payload,
            },{
                secret: this.configService.get("app.jwtSecret"),
                expiresIn: Number(exp)
            });

        return token ;



    }


    public async generateTokens(user:User){

        const [accessToken,refreshToken] =await Promise.all([
            this.signToken(user.id,this.configService.getOrThrow("app.jwtAccessTokenTtl"),{email:user.email}),
            this.signToken(user.id,this.configService.getOrThrow("app.jwtRefreshTokenTtl"))

        ])

     
        console.log(accessToken,refreshToken)

        return {
            accessToken,
            refreshToken
        }

    }
    
}