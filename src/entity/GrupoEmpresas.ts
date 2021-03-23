import { Column, Entity,  OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { Empresas } from "./Empresas";

@Entity("grupo_empresas")
export class GrupoEmpresas {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'grupo_empresa', type: 'varchar', length: '50', nullable: false })
    grupoEmpresa: string

    @OneToMany(() => Empresas, (empresas) => empresas.grupoEmpresaIdFK)
    empresas: Empresas[];


}