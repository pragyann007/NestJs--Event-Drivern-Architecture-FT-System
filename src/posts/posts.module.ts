import { forwardRef, Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostService } from './providers/post.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';

@Module({
  controllers: [PostsController],
  providers: [PostService],
  imports:[forwardRef(()=>UsersModule),TypeOrmModule.forFeature([Post])],
  exports:[PostService]
})
export class PostsModule {}
