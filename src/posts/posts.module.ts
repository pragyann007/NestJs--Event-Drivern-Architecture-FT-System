import { forwardRef, Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostService } from './providers/post.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostService],
  imports:[forwardRef(()=>UsersModule)],
  exports:[PostService]
})
export class PostsModule {}
