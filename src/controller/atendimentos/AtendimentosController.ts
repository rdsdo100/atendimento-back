import {Request, Response} from "express";
import {Controller, Get, Post} from "@overnightjs/core";
import {Atendimentos} from "../../entity/Atendimentos";
import AtendimentosBusiness from "../../business/atendimentos/AtendimentosBusiness";

@Controller('atendimento')
export default  class AtendimentosController {

    @Get()
    async buscarAtendimentoUsuarios(request: Request , response: Response) {

        const atendimentosBusiness = new AtendimentosBusiness()
        const retornoBuscaAtendimento = await atendimentosBusiness.buscaratendimentosUsuarios(4)
        return response.status(200).json(retornoBuscaAtendimento)



    }


    @Post()
    async cadastrarAtendimentos(request: Request , response: Response){
        const atendimento = new Atendimentos()
const atendimentosBusiness = new AtendimentosBusiness()

        atendimento.descricaoAtendimento = String(request.body.descricaoAtendimento)
        atendimento.usuariosIdFK.id = Number(1)
        atendimento.empresasIdFK.id = Number(request.body.codigoEmpresaId)
        atendimento.dataAtendimento = new Date()



const atendimentoSalvo = await  atendimentosBusiness.cadastrarAtendimentos(atendimento)

    }
}