import { Injectable ,Inject,forwardRef} from '@nestjs/common';
import { DuplicateDataSourceException, InjectRepository } from '@nestjs/typeorm';
import { PostService } from 'src/posts/providers/post.service';
import { User } from './user.entity';
import { DataSource, Repository } from 'typeorm';
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
        private UserRepiository:Repository<User>,

        private readonly dataSource:DataSource
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

    async checkDuplicateUsers(email:string):Promise<User|null>{
        const checkUser = await this.UserRepiository.findOneBy({email});

        if(checkUser) return checkUser 
        else{ return null} 

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

    async createManyUsers(usersDto:UserDTO[]){
        const queryPlanner =  this.dataSource.createQueryRunner();
        let users:User[]=[] ;

        await queryPlanner.connect();

        await queryPlanner.startTransaction();

        try {
            
                let userInstance =  queryPlanner.manager.create(User,usersDto);
                let newUser =await  queryPlanner.manager.save(userInstance);
               
            await queryPlanner.commitTransaction();
            users=[...newUser];
            
            
        } catch (error) {
            await queryPlanner.rollbackTransaction();
            
        }
        finally{
            await queryPlanner.release()

        }


    }
}
