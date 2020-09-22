import {Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn} from "typeorm";

@Entity()
export class Usuarios {

@PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column({unique:true})
    email: string

    @Column()
    senha: string

    @CreateDateColumn()
    createdAt: string;
    
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;
    
}
