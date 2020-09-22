import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class GrupoUsuarios {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string
}
