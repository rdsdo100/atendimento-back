import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
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



    
}
