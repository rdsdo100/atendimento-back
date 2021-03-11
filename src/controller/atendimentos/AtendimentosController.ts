import { Request, Response } from "express";
import { ClassMiddleware, Controller, Get, Post, Delete } from "@overnightjs/core";
import { Atendimentos } from "../../entity/Atendimentos";
import AtendimentosBusiness from "../../business/atendimentos/AtendimentosBusiness";
import { Empresas } from "../../entity/Empresas";
import { Usuarios } from "../../entity/Usuarios";
import { decodificar } from "../../config/Jwt";

@Controller('atendimento')
@ClassMiddleware([decodificar])
export default class AtendimentosController {

    @Get()
    async buscarAtendimentoUsuarios(request: Request, response: Response) {
const  usuarioId = Number(request.body.decoded.id)
        const atendimentosBusiness = new AtendimentosBusiness()
        const retornoBuscaAtendimento = await atendimentosBusiness.buscarAtendimentosUsuarios(usuarioId)
        return response.status(200).json(retornoBuscaAtendimento)

    }

    @Post()
    async cadastrarAtendimentos(request: Request, response: Response) {
        const atendimento = new Atendimentos()
        const empresa = new Empresas()
        const usuario = new Usuarios()
        const atendimentosBusiness = new AtendimentosBusiness()

        atendimento.descricaoAtendimento = String(request.body.descricaoAtendimento)
        empresa.id = Number(request.body.codigoEmpresaId)
        usuario.id = Number(request.body.decoded.id)
        atendimento.dataAtendimento = new Date()
        atendimento.usuariosIdFK = usuario
        atendimento.empresasIdFK = empresa
        

        const atendimentoSalvo = await atendimentosBusiness.cadastrarAtendimentos(atendimento)

        return response.status(200).json(atendimentoSalvo)
    }

 @Delete(":id")
    async deletarAtendimento(request: Request, response: Response){
        const  usuarioId = Number(request.body.decoded.id)
        const deletar = Number(request.params.id)
        let message: string = ''
        const atendimentoBusiness = new AtendimentosBusiness()
       message = await atendimentoBusiness.deletarAtendimentos(deletar , usuarioId)
    
        response.json({message})
    }

}