import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class empresas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'codigo_empresa', length: 50 })
    codigoEmpresa: string;

}
