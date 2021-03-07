import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Atendimentos} from "./Atendimentos";


@Entity()
export class Empresas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'codigo_empresa', length: 10 , unique: false })
    codigoEmpresa: string;

    @Column({  name: 'nome_empresa',  length: 250 , type: 'varchar', nullable: false, unique: false})
    nomeEmpresa: string

    @OneToMany(() => Atendimentos, (atendimentos) => atendimentos.usuariosIdFK)
    atendimentos: Atendimentos[];
}
