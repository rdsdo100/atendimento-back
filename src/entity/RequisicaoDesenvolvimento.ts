import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Atendimentos} from "./Atendimentos";

@Entity({name: "requisicao_desenvolvimento"})
export class RequisicaoDesenvolvimento extends BaseEntity {

    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id:number

    @Column()
    descricao:string

    @Column({name:"data_cadastro"})
    dataCadastro: Date

    @Column()
    pendente:boolean

    @Column({name:"data_previsao" , type: "date" , nullable: true })
    dataPrevisao: Date

    @Column({name:"data_encerramento" , type: "date" , nullable: true})
    dataEncerramento: Date

    @ManyToOne(() => Atendimentos, (atendiemntos) => atendiemntos.requisicaoDesenvolvimento, {eager: true , nullable: true})
    @JoinColumn([{name: "atenimento_id_fk", referencedColumnName: "id" }])
    atenimentoIdFk: Atendimentos

}
