import { SetMetadata } from '@nestjs/common';
import { AUTH_DECORATOR_KEY } from '../constants/auth.keys';
import { AuthType } from '../enums/Auth-Type.enum';

export const Authentication = (...authType: AuthType[]) => SetMetadata(AUTH_DECORATOR_KEY, authType);
