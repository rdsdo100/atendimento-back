import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Atendimentos} from "./Atendimentos";
import {UsuarioEmpresa} from "./UsuarioEmpresa";
import {TipoUsuario} from "./TipoUsuario";
import {GrupoEmpresa} from "./GrupoEmpresa";


@Entity()
export class Empresas extends BaseEntity {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id:number

    @Column({unique:true , name:"cod_empresa"})
    codEmpresa:string

    @Column({name:"razao_empresa"})
    razaoEmpresa:string

    @Column({name:"fantasia_empresa"})
    fantasiaEmpresa:string

    @OneToMany(() => Atendimentos, (atendimentos) => atendimentos.empresasIdFk)
    atendimentos: Atendimentos[];

    @OneToMany(() => UsuarioEmpresa, (usuarioEmpresa) => usuarioEmpresa.empresaIdFk)
    usuarioEmpresa: UsuarioEmpresa[];



    @ManyToOne(() => GrupoEmpresa, (grupoEmpresa) => grupoEmpresa.empresa, )
    @JoinColumn([{name: "grupo_empressa_id_fk", referencedColumnName: "id"}])
    empresaIdFk: TipoUsuario

}
