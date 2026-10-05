import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '../auth.guard';
import { AuthType } from 'src/auth/enums/Auth-Type.enum';
import { AUTH_DECORATOR_KEY } from 'src/auth/constants/auth.keys';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private static readonly DefaultType=AuthType.BEARER;

  private readonly AuthenticationStartegyMapper :Record<AuthType,CanActivate| CanActivate[]>;

  constructor(
    private readonly reflector:Reflector,
    private readonly accessTokenGuard:AuthGuard,
    
    
  ){
    this.AuthenticationStartegyMapper = {
      [AuthType.BEARER]:this.accessTokenGuard,
      [AuthType.NONE]:{canActivate:()=>true}

    }
  }
 
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. Get the list of allowed auth types (returns an array)
    const authTypes = this.reflector.getAllAndOverride<AuthType[]>(
      AUTH_DECORATOR_KEY, 
      [context.getHandler(), context.getClass()]
    ) ?? [AuthenticationGuard.DefaultType];
  
    // 2. Map the types to guard instances and flatten them safely
    const guards = authTypes
      .map((type) => this.AuthenticationStartegyMapper[type])
      .flat(); // .flat() works perfectly here because .map returned an array of guards/arrays
  
    let error = new UnauthorizedException('Authentication failed');
  
    // 3. Loop and evaluate (OR logic)
    for (const instance of guards) {
      try {
        const canActivate = await instance.canActivate(context);
        if (canActivate) {
          return true; // Let them in if any guard passes!
        }
      } catch (err) {
        error = err; // Correctly capture the real error (e.g., TokenExpiredError)
      }
    }
  
    // 4. If nothing passed, kick them out
    throw error;
  }
}
