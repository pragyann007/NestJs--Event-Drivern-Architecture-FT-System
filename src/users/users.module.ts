import { Module ,forwardRef} from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { PostsModule } from 'src/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  exports:[UsersService],
  imports:[forwardRef(()=>PostsModule),TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
