import { Injectable ,Inject,forwardRef} from '@nestjs/common';
import { PostService } from 'src/posts/providers/post.service';

@Injectable()
/**
 * Performs the business logic regarding Users  and interacts with user repiository 
 */
export class UsersService {
    /** 
     * This is the constructor that handles circular dependcy and injetc the postService */
    constructor(
        @Inject(forwardRef(()=>PostService))
        private readonly postService:PostService
    ){}
    /**This method gets a user by its Id and returns only 1 user. */
    getOneUser(userId:string){
        return {id:userId,name:"Pragyan"}
    }
    /**
     * This method returns the total post  count of user created by this user of userId
     */
    getUsersPostCount(postId:string){
        const name = this.postService.getPostName()

        return {postId,name:name,likes:19000,comments:8999,views:1000000}
    }
}
