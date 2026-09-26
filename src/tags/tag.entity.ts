import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Tag{

    @PrimaryGeneratedColumn()
    id:string

    @Column({
        type:"text",
        nullable:false
    })
    name:string

    @Column({
        type:"text",
        nullable:false
    })
    slug:string

    @Column({
        type:"text",
        nullable:false
    })

    description:string

    @Column({
        type:"text",
        nullable:false
    })
    schema:string

    @Column({
        type:"text",
        nullable:true
    })
    featuredImageUri?:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date

}