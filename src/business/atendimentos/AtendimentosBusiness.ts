
import { Atendimentos } from "../../entity/Atendimentos";
import AtendimentosRepository from "../../repository/AtendimentosRepository";


export default class AtendimentosBusiness {

    readonly atendimentosRepository = new AtendimentosRepository

    async cadastrarAtendimentos(atendimento: Atendimentos): Promise<any> {

        const atendimentoSalvo = await this.atendimentosRepository.insertAtendimentoRepository(atendimento)
        return atendimentoSalvo
    }

    async updateAtendimentos(atendimento: Atendimentos): Promise<any> {

        const atendimentoUpdate = await this.atendimentosRepository.updateAtendimentosRepository(atendimento)
        return atendimentoUpdate
    }


    async buscarAtendimentosUsuarios(idUsuario: number) {

        const retornoListAtendimentos = await this.atendimentosRepository.buscarAtendimentoUsuarioRepository(idUsuario)

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
        const atendimento = await this.atendimentosRepository.buscarAtendimentoIdRepository(idAtendimento)
        const dataHoje = new Date
        const dataAtendimento: Date = atendimento.dataAtendimento
        let message: string = ''


        if ((Number(dataHoje.getDate()) == Number(dataAtendimento.getDate())) &&
            (Number(dataHoje.getMonth()) == Number(dataAtendimento.getMonth())) &&
            (Number(dataHoje.getFullYear()) == Number(dataAtendimento.getFullYear()))) {

            if ((idAtendimento === Number(atendimento.id) &&
              (idUsuario === Number(atendimento.usuariosIdFK.id)) ) ){
              
                console.log(atendimento)
                this.atendimentosRepository.deleteIdAtendimentoRepository(idAtendimento)
                return message = 'Atendimento Deletado!'

            }else {
                return message = 'Atendimento Não deletado, Usuario Incompativél!'
            }
        }else {
            return message = 'Atendimento Não deletado, Data Incompativél!'
        }
    }


async  buscarAtendimentosEmpresas() {


    const retorno = await this.atendimentosRepository.buscaEmpresaAtendimentos()
    

let retornoFormatado = retorno.map((item : any) =>{
return {
    codigoEmpresa: item.codigo_empresa ,
    count: Number(item.count)
}


})

    return retornoFormatado
    
}


}