import GrupoUsuarioRepository from "../../repository/GrupoUsuarioRepository"

export default class GrupoUsuariosBusiness {

readonly grupoUsuarioRepository = new GrupoUsuarioRepository

    async index() {
        
        const resposta = await this.grupoUsuarioRepository.listGrupoUsuarioRepository()
        return resposta

    }
}


