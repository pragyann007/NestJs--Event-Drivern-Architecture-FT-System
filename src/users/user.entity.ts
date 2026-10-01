import { Post } from "src/posts/post.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:string
    @Column({
        type:"varchar",
        nullable:false,
        length:20
    })
    name:string

    @Column({
        type:"varchar",
        length:20,
        unique:true
    })
    email:string

    @Column({
        type: "text",
        nullable: false,
    })
    password: string;
    

    @Column({
        type:"integer",
        nullable:false,
        default:18
    })
    age:number

    @OneToMany(()=>Post,(posts)=>posts.author)
    posts:Post[]
}