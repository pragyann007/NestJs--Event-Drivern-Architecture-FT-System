import { Module } from '@nestjs/common';
import { HashingProvider } from './provider/hashing.provider';
import { BcryptProvider } from './provider/bcrypt.provider';
import { AuthService } from './provider/auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import {JwtModule} from "@nestjs/jwt"
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [{
    provide:HashingProvider,
    useClass:BcryptProvider
  }, AuthService],
  imports:[UsersModule,ConfigModule
    
  ],
  controllers: [AuthController]
})
export class AuthModule {}
