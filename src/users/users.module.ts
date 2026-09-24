import { Module ,forwardRef} from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  exports:[UsersService],
  imports:[forwardRef(()=>PostsModule)]
})
export class UsersModule {}
