import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Atendimentos} from "./Atendimentos";

@Entity()
export class RequisicaoDesenvolvimento {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id:number

@Column()
descricao:string

    @Column({name:"data_cadastro"})
    dataCadastro: Date

    @Column()
    pendente:boolean


    @ManyToOne(() => Atendimentos, (atendiemntos) => atendiemntos.requisicaoDesenvolvimento, {eager: true , nullable: true})
    @JoinColumn([{name: "atenimento_id_fk", referencedColumnName: "id" }])
    atenimentoIdFk: Atendimentos



}
