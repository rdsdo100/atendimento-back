import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Atendimentos} from "./Atendimentos";
import {UsuarioEmpresa} from "./UsuarioEmpresa";

@Entity()
export class Empresas {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id:number

    @Column({unique:true , name:"cod_empresa"})
    codEmpresa:string

    @Column({name:"razao_empresa"})
    razaoEmpresa:string

    @Column({name:"fantasia-empresa"})
    fantasiaEmpresa:string

    @OneToMany(() => Atendimentos, (atendimentos) => atendimentos.empresasIdFk)
    atendimentos: Atendimentos[];

    @OneToMany(() => UsuarioEmpresa, (usuarioEmpresa) => usuarioEmpresa.empresaIdFk)
    usuarioEmpresa: UsuarioEmpresa[];

}
