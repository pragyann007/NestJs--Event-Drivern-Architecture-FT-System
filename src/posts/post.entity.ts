import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MetaOptionsDTO } from "../meta-options/dto/metaOptions.dto";
import { Status } from "./types/PostStatus.enum";
import { PostType } from "./types/PostType.enum";
import { MetaOption } from "src/meta-options/meta-option.entity";
import { User } from "src/users/user.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id:string;

    @Column({
        type:"varchar",
        nullable:false,
    })
    title:string
    @Column({
        type:"enum",
        enum:PostType,
        nullable:false,
    })
    postType:PostType;

    @Column({
        type:"varchar",
        nullable:false,
    })
    slug:string;

    @Column({
        type:"enum",
        enum:Status,
        nullable:false,
    })
    status:Status;
    @Column({
        type:"varchar",
        nullable:true,
    })
    content?:string;
    @Column({
        type:"varchar",
        nullable:true,
    })
    schema?:string;
    @Column({
        type:"varchar",
        nullable:true,
    })
    featuredImageUri?:string;
    @Column({
        type:"timestamp",
        nullable:false,
    })
    publishOn:Date;
    @Column({
        type:"varchar",
        array:true,
        nullable:false,
    })
    tags:string[];
   
    @OneToOne(()=>MetaOption,(metaOptions)=>metaOptions.post,{
        cascade:true,
        /**Addinge ager true will do same stuff as done by relation etc etc stuff  */
    })
    @JoinColumn()
    metaOptions?:MetaOption|null;


    @ManyToOne(()=>User,(user)=>user.posts)
    @JoinColumn()
    author:User

}