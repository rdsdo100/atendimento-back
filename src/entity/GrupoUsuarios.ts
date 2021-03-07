import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,

} from "typeorm";
import { Usuarios } from "./Usuarios";

@Entity({name: 'grupo_usuarios'})
export class GrupoUsuarios extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @OneToMany(() => Usuarios, (usuarios) => usuarios.grupoUsuariosIdFK)
    usuarios: Usuarios[];
   
}
