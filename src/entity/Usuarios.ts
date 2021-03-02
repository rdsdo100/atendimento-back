import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn, BaseEntity
} from "typeorm";
import { GrupoUsuarios } from "./GrupoUsuarios";

@Entity()
export class Usuarios extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nome_usuario', length: 50 })
    nomeUsuario: string;

    @Column({ length: 90, unique: true })
    email: string;

    @Column({ length: 30 })
    senha: string;

    @Column({ length: 30 })
    matricula: string;

    @Column()
    ativo: boolean;

    @Column()
    bloqueado: boolean;

    
}
