import { Column, PrimaryGeneratedColumn } from "typeorm";
import { MetaOptionsDTO } from "../meta-options/dto/metaOptions.dto";
import { Status } from "./types/PostStatus.enum";
import { PostType } from "./types/PostType.enum";

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
        type:"varchar",
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
        type:"array",
        nullable:false,
    })
    tags:string[];
    @Column({
        type:"array",
        nullable:false,
    })
    metaOptions:MetaOptionsDTO;

}