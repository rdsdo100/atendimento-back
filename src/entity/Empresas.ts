import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Atendimentos} from "./Atendimentos";


@Entity()
export class Empresas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'codigo_empresa', length: 50 })
    codigoEmpresa: string;

    @Column({  name: 'nome_empresa',  type: 'varchar', nullable: false, unique: true,})
    nomeEmpresa: string

    @OneToMany(() => Atendimentos, (atendimentos) => atendimentos.usuariosIdFK)
    atendimentos: Atendimentos[];
}
