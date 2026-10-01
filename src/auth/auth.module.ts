import { Module } from '@nestjs/common';
import { HashingProvider } from './provider/hashing.provider';
import { BcryptProvider } from './provider/bcrypt.provider';
import { AuthService } from './provider/auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';

@Module({
  providers: [{
    provide:HashingProvider,
    useClass:BcryptProvider
  }, AuthService],
  imports:[UsersModule],
  controllers: [AuthController]
})
export class AuthModule {}
