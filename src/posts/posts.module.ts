import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostService } from './providers/post.service';

@Module({
  controllers: [PostsController],
  providers: [PostService]
})
export class PostsModule {}
