import { Module ,Post,forwardRef} from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { PostsModule } from 'src/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  exports:[UsersService],
  imports:[forwardRef(()=>PostsModule),TypeOrmModule.forFeature([User,Post]),ConfigModule]
})
export class UsersModule {}
