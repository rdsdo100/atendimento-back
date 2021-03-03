import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Usuarios} from "./Usuarios";
import {Empresas} from "./Empresas";

@Entity()
export class Atendimentos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'descricao_atendimento', length: 50 })
    descricaoAtendimento: string;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.atendimentos)
    @JoinColumn([{ name: 'usuarios_id_fk', referencedColumnName: 'id' }])
    usuariosIdFK: Usuarios;

    @ManyToOne(() => Empresas, (empresas) => empresas.atendimentos)
    @JoinColumn([{ name: 'empresas_id_fk', referencedColumnName: 'id' }])
    empresasIdFK: Empresas;


}
