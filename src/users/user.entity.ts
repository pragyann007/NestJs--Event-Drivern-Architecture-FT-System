import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
        type:"varchar",
        length:30,
        nullable:false
    })
    password:string

    @Column({
        type:"integer",
        nullable:false,
        default:18
    })
    age:number
}