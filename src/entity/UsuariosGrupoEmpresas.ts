import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "usuarios_grupo_empresas"})
export class UsuariosGrupoEmpresas {


    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id:number

}
