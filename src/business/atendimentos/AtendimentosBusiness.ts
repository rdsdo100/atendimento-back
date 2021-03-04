
import {Atendimentos} from "../../entity/Atendimentos";
import {buscarAtendimentoUsuarioRepository, insertAtendimentoRepository} from "../../repository/AtendimentosRepository";

export default  class AtendimentosBusiness {


    async cadastrarAtendimentos(atendimento: Atendimentos) : Promise<any>{

        const atendimentoSalvo = await insertAtendimentoRepository(atendimento)
        return atendimentoSalvo
    }


    async buscaratendimentosUsuarios(idUsuario: number){

        const retornoListAtendimentos = await buscarAtendimentoUsuarioRepository(idUsuario)
        return retornoListAtendimentos
    }
}