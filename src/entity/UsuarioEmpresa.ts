import {Entity} from "typeorm";
import {Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm/index";
import {Empresas} from "./Empresas";

@Entity({name: "usuario_empresa"})
export class UsuarioEmpresa {


    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id:number

    @Column()
    nome:string


    @ManyToOne(() => Empresas, (empresa) => empresa.usuarioEmpresa  ,{ eager: true})
    @JoinColumn([{ name: "empresa_id_fk", referencedColumnName: "id" }])
    empresaIdFk: Empresas


}
