
import {Atendimentos} from "../../entity/Atendimentos";
import {buscarAtendimentoUsuarioRepository, insertAtendimentoRepository} from "../../repository/atendimentosRepository";

export default  class AtendimentosBusiness {


    async cadastrarAtendimentos(atendimento: Atendimentos) : Promise<any>{

        const atendimentoSalvo = await insertAtendimentoRepository(atendimento)
        return atendimentoSalvo
    }


    async buscarAtendimentosUsuarios(idUsuario: number){

        const retornoListAtendimentos = await buscarAtendimentoUsuarioRepository(idUsuario)
       
       const retornoAtendimentoFormatado  = retornoListAtendimentos.map((atendimento: any)=>{
           return {
               id : atendimento.id,
               descricaoAtendimento: atendimento.descricaoAtendimento,
               dataAtendimento :  atendimento.dataAtendimento,
               cogigoEmpresa: atendimento.empresasIdFK.codigoEmpresa,
               nomeEmpresa: atendimento.empresasIdFK.nomeEmpresa
           }

       })

        return retornoAtendimentoFormatado
    }
}