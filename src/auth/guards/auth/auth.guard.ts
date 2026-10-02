import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { decode } from 'punycode';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly configService:ConfigService,
    private readonly jwtService:JwtService
  ){}
  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean> {

    const request:Request = context.switchToHttp().getRequest();

    const token = request.headers.authorization?.split(" ")[1] ;

    if(!token){
      throw new UnauthorizedException("No token")
    }
    console.log("atkn",token)

    try {
      console.log(this.configService.get("app.jwtSecret"))
      
      const decodeToken = await this.jwtService.verifyAsync(token,{secret:this.configService.getOrThrow("app.jwtSecret")});

      console.log(decodeToken)
    } catch (error) {
      throw new UnauthorizedException("Invalid ..")
      
    }




    
    return true;
  }
}
