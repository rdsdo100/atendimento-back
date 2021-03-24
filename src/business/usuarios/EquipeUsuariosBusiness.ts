import { listEquipeUsuarioRepository } from "../../repository/equipeUsuarioRepository"


export default class EquipeUsuariosBusiness {

    async index() {
        
        const resposta = await listEquipeUsuarioRepository()
        return resposta

    }
}


