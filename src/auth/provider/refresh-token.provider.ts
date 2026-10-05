import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtTokenProvider } from "./jwt-token.provider";
import { UsersService } from "src/users/users.service";
import { RefreshTokenDTO } from "../dto/refres-token.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class RefreshTokenProvider {
    constructor(
        private readonly jwtService:JwtService,
        private readonly jwtTokenProvider:JwtTokenProvider,
        private readonly userService:UsersService,
        private readonly configService:ConfigService
    ){}


    async refreshToken(refreshTokenDto:RefreshTokenDTO){
        try {
            const verifiedUser = await this.jwtService.verifyAsync(refreshTokenDto.refreshToken,{
                secret:this.configService.get("app.jwtSecret"),
            })

            const user = await this.userService.getOneUserById(verifiedUser.sub);

            if(!user){
                return ;
            }

            const tokens = await this.jwtTokenProvider.generateTokens(user);

            return tokens;

            
        } catch (error) {
            
        }
    }
}
