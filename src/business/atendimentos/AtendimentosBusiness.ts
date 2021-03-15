
import { Atendimentos } from "../../entity/Atendimentos";
import { insertAtendimentoRepository, buscarAtendimentoUsuarioRepository, deleteIdAtendimentoRepository, buscarAtendimentoIdRepository, updateAtendimentosRepository } from "../../repository/atendimentosRepository";


export default class AtendimentosBusiness {


    async cadastrarAtendimentos(atendimento: Atendimentos): Promise<any> {

        const atendimentoSalvo = await insertAtendimentoRepository(atendimento)
        return atendimentoSalvo
    }

    async updateAtendimentos(atendimento: Atendimentos): Promise<any> {

        const atendimentoUpdate = await updateAtendimentosRepository(atendimento)
        return atendimentoUpdate
    }


    async buscarAtendimentosUsuarios(idUsuario: number) {

        const retornoListAtendimentos = await buscarAtendimentoUsuarioRepository(idUsuario)

        const retornoAtendimentoFormatado = retornoListAtendimentos.map((atendimento: any) => {
            return {
                id: atendimento.id,
                descricaoAtendimento: atendimento.descricaoAtendimento,
                dataAtendimento: atendimento.dataAtendimento,
                idEmpresa: atendimento.empresasIdFK.id,
                cogigoEmpresa: atendimento.empresasIdFK.codigoEmpresa,
                nomeEmpresa: atendimento.empresasIdFK.nomeEmpresa
            }

        })

        return retornoAtendimentoFormatado
    }

    async deletarAtendimentos(idAtendimento: number, idUsuario: number) {
        const atendimento = await buscarAtendimentoIdRepository(idAtendimento)
        const dataHoje = new Date
        const dataAtendimento: Date = atendimento.dataAtendimento
        let message: string = ''


        if ((Number(dataHoje.getDate()) == Number(dataAtendimento.getDate())) &&
            (Number(dataHoje.getMonth()) == Number(dataAtendimento.getMonth())) &&
            (Number(dataHoje.getFullYear()) == Number(dataAtendimento.getFullYear()))) {

            if ((idAtendimento === Number(atendimento.id) &&
              (idUsuario === Number(atendimento.usuariosIdFK.id)) ) ){
              
                console.log(atendimento)
                deleteIdAtendimentoRepository(idAtendimento)
                return message = 'Atendimento Deletado!'

            }else {
                return message = 'Atendimento Não deletado, Usuario Incompativél!'
            }
        }else {
            return message = 'Atendimento Não deletado, Data Incompativél!'
        }
    }


}