import { Injectable ,Inject,forwardRef} from '@nestjs/common';
import { PostService } from 'src/posts/providers/post.service';

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(()=>PostService))
        private readonly postService:PostService
    ){}
    getOneUser(userId:string){
        return {id:userId,name:"Pragyan"}
    }
    getUsersPostCount(postId:string){
        const name = this.postService.getPostName()

        return {postId,name:name,likes:19000,comments:8999,views:1000000}
    }
}
