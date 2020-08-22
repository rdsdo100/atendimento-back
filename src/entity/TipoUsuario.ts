import {Entity} from "typeorm";
import {Column, OneToMany, PrimaryGeneratedColumn} from "typeorm/index";
import {Usuarios} from "./Usuarios";

@Entity({name: "tipo_usuarios"})
export class TipoUsuario {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id:number

    @Column({name: "tipo_usuario"})
    tipoUsuario:string


    @OneToMany(() => Usuarios, (usuarios) => usuarios.tipoUsuarioIdFk)
    usuarios: Usuarios[];




}
