import { listGrupoUsuarioRepository } from "../../repository/grupoUsuarioRepository";

export default class GrupoUsuariosBusiness {

    async index() {
        
        const resposta = await listGrupoUsuarioRepository()
        return resposta

    }
}


