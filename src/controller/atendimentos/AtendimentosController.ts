import {Request, Response} from "express";
import {Controller, Post} from "@overnightjs/core";
import {Atendimentos} from "../../entity/Atendimentos";
import AtendimentosBusiness from "../../business/atendimentos/AtendimentosBusiness";

@Controller('/atendimento')
export default  class AtendimentosController {

    @Post()
    async cadastrarAtendimentos(request: Request , response: Response){
        const atendimento = new Atendimentos()
const atendimentosBusiness = new AtendimentosBusiness()

        atendimento.descricaoAtendimento = String(request.body.descricaoAtendimento)
        atendimento.usuariosIdFK.id = Number(1)
        atendimento.empresasIdFK.id = Number(request.body.codigoEmpresaId)



const atendimentoSalvo = await  atendimentosBusiness.cadastrarAtendimentos(atendimento)

    }
}