import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { ContatosPessoas } from "./ContatosPessoas";
import { ContatosTelefones } from "./ContatosTelefones";

@Entity({name: "pessoas_telefones"})
export class PessoasTelefones {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ContatosPessoas, (contatosPessoas) => contatosPessoas.pessoasTelefones)
    @JoinColumn([{ name: 'pessoass_id_fk', referencedColumnName: 'id' }])
    contatosPessoasIdFK: ContatosPessoas;

    @ManyToOne(() => ContatosTelefones, (contatosTelefones) => contatosTelefones.pessoasTelefones)
    @JoinColumn([{ name: 'telefones_id_fk', referencedColumnName: 'id' }])
    contatosTelefonesIdFK: ContatosTelefones;

}
