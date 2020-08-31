import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Empresas} from "./Empresas";

@Entity({name: "grupo_empressa"})
export class GrupoEmpresa {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id:number

    @Column({unique:true , name:"nome_grupo"})
    nomeGrupo:string

    @OneToMany(() => Empresas, (empresa) => empresa.empresaIdFk)
    empresa:Empresas[];


}

