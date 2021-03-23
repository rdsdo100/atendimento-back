import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Usuarios } from "./Usuarios";

@Entity({name: "tipo_equipe"})
export class TipoEquipe {
    @PrimaryGeneratedColumn()
    id: number




   @Column( { name: "nome_equipe" ,type: "varchar" , length: "50" , nullable: false , unique: true })
    nomeEquipe: string


    @OneToMany(() => Usuarios, (usuarios) => usuarios.tipoEquipeIdFK)
    usuarios: Usuarios[];

}
