import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Usuarios} from "./Usuarios";
import {Empresas} from "./Empresas";
import {RequisicaoDesenvolvimento} from "./RequisicaoDesenvolvimento";

@Entity()
export class Atendimentos {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id:number

    @Column({name: "descricao_atendimento"})
    descricaoAtendimento:string

    @Column({name: "pendente" , default: true , nullable:false})
    pendente:boolean

    @Column({name:"data_cadastro" , type: "date"})
    dataCadastro: Date

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.atendimentos , {eager: true})
    @JoinColumn([{ name: "usuarios_id_fk", referencedColumnName: "id" }])
    usuariosIdFk: Usuarios;

    @ManyToOne(() => Empresas, (empresas) => empresas.atendimentos,{ eager: true})
    @JoinColumn([{ name: "empresas_id_fk", referencedColumnName: "id" }])
    empresasIdFk: Empresas

    @OneToMany(() => RequisicaoDesenvolvimento, (requisicaoDesenvolvimento) => requisicaoDesenvolvimento.atenimentoIdFk)
    requisicaoDesenvolvimento: RequisicaoDesenvolvimento[];


}
