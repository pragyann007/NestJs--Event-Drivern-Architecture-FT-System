import { Injectable ,Inject,forwardRef} from '@nestjs/common';
import { DuplicateDataSourceException, InjectRepository } from '@nestjs/typeorm';
import { PostService } from 'src/posts/providers/post.service';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dtos/user.dto';
import { create } from 'domain';

@Injectable()
/**
 * Performs the business logic regarding Users  and interacts with user repiository 
 */
export class UsersService {
    /** 
     * This is the constructor that handles circular dependcy and injetc the postService */
    constructor(
        @Inject(forwardRef(()=>PostService))
        private readonly postService:PostService,

        @InjectRepository(User)
        private UserRepiository:Repository<User>
    ){}

    async createUser(createUserDTO:UserDTO){
        const userExists = await this.UserRepiository.findOne({
            where:{
                email:createUserDTO.email
            }
        })
        if(userExists){
            throw new DuplicateDataSourceException("User already exists..")
        }
        let  user =  this.UserRepiository.create(createUserDTO);
        user  = await this.UserRepiository.save(user)

        return {status:"OK",statusCode:201,data:user}
    }

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
