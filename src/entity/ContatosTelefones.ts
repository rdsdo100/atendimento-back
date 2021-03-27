import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PessoasTelefones } from "./PessoasTelefones";

@Entity({ name: "contatos_telefones" })
export class ContatosTelefones {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'dd', type: 'varchar', length: '3', nullable: false, })
    dd: string

    @Column({ name: 'telefone', type: 'varchar', length: '12', nullable: false, })
    telefone: string

    @OneToMany(() => PessoasTelefones, (pessoasTelefones) => pessoasTelefones.contatosTelefonesIdFK)
    pessoasTelefones: PessoasTelefones[];


}
