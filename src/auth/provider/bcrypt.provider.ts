import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import * as bcrypt from "bcryptjs"


@Injectable()
export class BcryptProvider extends HashingProvider{

async hashPassword(data: string): Promise<string> {

    const salt = await bcrypt.genSalt(8);
    const hashPassword = await bcrypt.hash(data,salt);

    return hashPassword;

    
}
    async comparePassword(data: string, encryptedData: string): Promise<boolean> {

        
        return await bcrypt.compare(data,encryptedData);
    }

}
