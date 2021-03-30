import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Empresas } from "./Empresas";
import { PessoasTelefones } from "./PessoasTelefones";

@Entity({name: "contatos_pessoas"})
export class ContatosPessoas {
    @PrimaryGeneratedColumn()
    id: number;



@Column({name: 'nome', type: 'varchar', length: '500', nullable: false})
    nome: string


   @Column( {name: 'cargo', type: 'varchar', length: '150', nullable: false})
    cargo:string


    @OneToMany(() => PessoasTelefones, (pessoasTelefones) => pessoasTelefones.contatosPessoasIdFK)
    pessoasTelefones: PessoasTelefones[];

    @ManyToOne(() => Empresas , (empresas) => empresas.contatosPessoas)
    @JoinColumn([{ name: 'empresas_id_fk', referencedColumnName: 'id' }])
    empresasIdFK: Empresas;

    
}
