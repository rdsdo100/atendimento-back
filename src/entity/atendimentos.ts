import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class atendimentos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'descricao_atendimento', length: 50 })
    descricaoAtendimento: string;

}
