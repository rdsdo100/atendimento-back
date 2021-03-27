import { getManager } from "typeorm";
import { GrupoUsuarios } from "../entity/GrupoUsuarios";

export default class GrupoUsuarioRepository {
    async listGrupoUsuarioRepository (): Promise<any>  {
    const usuarioRepository = getManager();
    return usuarioRepository.find(GrupoUsuarios);

};
}

