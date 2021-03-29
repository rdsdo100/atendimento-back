import { Request, Response } from "express";
import { ClassMiddleware, Controller, Get, Post, Delete, Put } from "@overnightjs/core";
import { decodificar } from "@src/config/Jwt";
import AtendimentosBusiness from "@src/business/atendimentos/AtendimentosBusiness";
import { Atendimentos } from "@src/entity/Atendimentos";
import { Empresas } from "@src/entity/Empresas";
import { Usuarios } from "@src/entity/Usuarios";


@Controller('atendimento')
@ClassMiddleware([decodificar])
export default class AtendimentosController {

readonly atendimentosBusiness = new AtendimentosBusiness
readonly atendimentos = new Atendimentos

    @Get()
    async buscarAtendimentoUsuarios(request: Request, response: Response) {
        const usuarioId = Number(request.body.decoded.id)
        const atendimentosBusiness = new AtendimentosBusiness()
        const retornoBuscaAtendimento = await atendimentosBusiness.buscarAtendimentosUsuarios(usuarioId)
        return response.status(200).json(retornoBuscaAtendimento)

    }

    @Get("graficos")
    async buscaGraficosEmpresasAtendimentos (_: Request, response: Response) {

        
        const resultado = await this.atendimentosBusiness.buscarAtendimentosEmpresas()

        
        return response.status(200).json(resultado)

        
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
    async deletarAtendimento(request: Request, response: Response) {
        const usuarioId = Number(request.body.decoded.id)
        const deletar = Number(request.params.id)
        let message: string = ''
        const atendimentoBusiness = new AtendimentosBusiness()
        message = await atendimentoBusiness.deletarAtendimentos(deletar, usuarioId)

        response.json({ message })
    }
    @Put()
    async updadeAtendimentos(request: Request, response: Response) {
        const atendimento = new Atendimentos()
        const atendimentosBusiness = new AtendimentosBusiness()

        atendimento.id = Number(request.body.id)
        atendimento.descricaoAtendimento = String(request.body.descricaoAtendimento)
        const atendimentoUpdate = await atendimentosBusiness.updateAtendimentos(atendimento)

        return response.status(200).json(atendimentoUpdate)
    }


}