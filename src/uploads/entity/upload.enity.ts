import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { fileType } from "../enums/file-type.enums";

@Entity()
export class Upload{
    @PrimaryGeneratedColumn()
    id:string;

    @Column({
        type:"varchar",
        nullable:false,
        
    })
    name:string;

    @Column({
        type:"varchar",
        nullable:false,
        
    })
    path:string;

    @Column({
        type:"enum",
        enum:fileType,
        default:fileType.IMAGE,
        nullable:false,
        
    })
    type:fileType;

    @Column({
        type:"varchar",
        nullable:false,
        
    })
    mimeType:string;

    @Column({
        type:"varchar",
        nullable:false,
        
    })
    size:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date
}