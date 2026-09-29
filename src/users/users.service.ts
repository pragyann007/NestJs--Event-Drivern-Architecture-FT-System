import { Injectable ,Inject,forwardRef} from '@nestjs/common';
import { DuplicateDataSourceException, InjectRepository } from '@nestjs/typeorm';
import { PostService } from 'src/posts/providers/post.service';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dtos/user.dto';
import { create } from 'domain';
import { ConfigService } from '@nestjs/config';

@Injectable()
/**
 * Performs the business logic regarding Users  and interacts with user repiository 
 */
export class UsersService {
    /** 
     * This is the constructor that handles circular dependcy and injetc the postService */
    constructor(
        private readonly configServie:ConfigService,
        @Inject(forwardRef(()=>PostService))
        private readonly postService:PostService,

        @InjectRepository(User)
        private UserRepiository:Repository<User>
    ){}

    /**This method will take the users details in request and creates db entires. */
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
    async getOneUserById(userId:string){
        const user = await this.UserRepiository.findOneBy({id:userId});
        return user ; 
    
    }

    async getALlUsers(){
        const hi = this.configServie.get<string>("HI");
        const env = this.configServie.get<string>("NODE_ENV");
        const users =  await this.UserRepiository.find();
        return {users,envRes:{msg:hi,env}}
    }
    /**
     * This method returns the total post  count of user created by this user of userId
     */
    getUsersPostCount(postId:string){
        const name = this.postService.getPostName()

        return {postId,name:name,likes:19000,comments:8999,views:1000000}
    }
}
