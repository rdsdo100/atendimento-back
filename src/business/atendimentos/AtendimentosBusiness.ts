
import {Atendimentos} from "../../entity/Atendimentos";
import {insertAtendimentoRepository} from "../../repository/AtendimentosRepository";

export default  class AtendimentosBusiness {


    async cadastrarAtendimentos(atendimento: Atendimentos) : Promise<any>{

const atendimentoSalvo = await insertAtendimentoRepository(atendimento)

        return atendimentoSalvo


    }
}