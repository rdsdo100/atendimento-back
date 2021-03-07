import { getManager } from "typeorm";
import { GrupoUsuarios } from "../entity/GrupoUsuarios";


const listGrupoUsuarioRepository = async (): Promise<any> => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(GrupoUsuarios);

};

export {
    listGrupoUsuarioRepository
}