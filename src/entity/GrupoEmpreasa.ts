import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("grupo_empresas")
export class GrupoEmpreasa {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'grupo_empresa', type: 'varchar', length: '50', nullable: false })
    grupoEmpresa: string
}