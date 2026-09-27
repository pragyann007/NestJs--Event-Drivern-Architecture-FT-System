import { IsOptional } from "class-validator";
import { Post } from "src/posts/post.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class MetaOption{
    @PrimaryGeneratedColumn()
    id:string

    @Column({
        type:"json",
        nullable:false
    })
    metaValue:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @OneToOne(()=>Post,(post)=>post.metaOptions)
    post:Post


}