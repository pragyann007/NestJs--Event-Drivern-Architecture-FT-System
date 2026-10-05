import { Module } from '@nestjs/common';
import { HashingProvider } from './provider/hashing.provider';
import { BcryptProvider } from './provider/bcrypt.provider';
import { AuthService } from './provider/auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import {JwtModule} from "@nestjs/jwt"
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtTokenProvider } from './provider/jwt-token.provider';
import { RefreshTokenDTO } from './dto/refres-token.dto';
import { RefreshTokenProvider } from './provider/refresh-token.provider';

@Module({
  providers: [{
    provide:HashingProvider,
    useClass:BcryptProvider
  }, AuthService,JwtTokenProvider,RefreshTokenProvider],
  imports:[UsersModule,ConfigModule,
  //   JwtModule.registerAsync({
  //   inject:[ConfigService],
  //   imports:[ConfigModule],
  //   useFactory:async(configService:ConfigService)=>{
  //     return {
  //        secret:configService.getOrThrow("jwtSecret")
  //     }

  //   }
  // })
],
  controllers: [AuthController]
})
export class AuthModule {}
