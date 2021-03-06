import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Atendimentos} from "./Atendimentos";
import { ContatosPessoas } from "./ContatosPessoas";
import { GrupoEmpresas } from "./GrupoEmpresas";



@Entity()
export class Empresas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'codigo_empresa', length: 10 , unique: true })
    codigoEmpresa: string;

    @Column({  name: 'nome_empresa',  length: 250 , type: 'varchar', nullable: false, })
    nomeEmpresa: string

    @OneToMany(() => Atendimentos, (atendimentos) => atendimentos.usuariosIdFK)
    atendimentos: Atendimentos[];

    @OneToMany(() => ContatosPessoas, (contatosPessoas) => contatosPessoas.empresasIdFK)
    contatosPessoas: ContatosPessoas[];



    @ManyToOne(() => GrupoEmpresas, (grupoEmpreasas) => grupoEmpreasas.empresas )
    @JoinColumn([{ name: 'grupo_empresas_id_fk', referencedColumnName: 'id' }])
    grupoEmpresaIdFK: GrupoEmpresas;
}
