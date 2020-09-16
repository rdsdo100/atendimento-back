import {Request, Response} from "express";
import VerificadorPrioridade from "./util/VerificadorPrioridade";
import {Usuarios} from "../entity/Usuarios";
import {Atendimentos} from "../entity/Atendimentos";
import {Empresas} from "../entity/Empresas";
import {Between, getRepository} from "typeorm/index";
import { ClassMiddleware, Controller, Delete, Get, Post, Server } from '@overnightjs/core';
import { decodificar } from '../config/Jwt';


@Controller('atendimentos')
@ClassMiddleware([decodificar])
export  default  class AtendimentosController {

    @Get('all')
    async index (request: Request , response: Response){

        const verificarPrioridade = new VerificadorPrioridade()

        if(verificarPrioridade.isUserAdm(Number(request.body.decoded.tipoUsuario)))
        {
            return response.json({message: "Acesso Negado!"})
        }

        const dataInicio = request.headers.datainicio
        const dataFim = request.headers.datafim

        const atendimentoRepository = getRepository(Atendimentos)

        const retorno = await atendimentoRepository.find(
            {
                //where:  {dataCadastro: Between(dataInicio, dataFim)}
            }
        )


   /*     const ret = retorno.map(item => {

            delete item.usuariosIdFk.senha
            delete item.usuariosIdFk.tipoUsuarioIdFk
            delete item.usuariosIdFk.bloqueioUsuario
            delete item.empresasIdFk.fantasiaEmpresa
            delete item.usuariosIdFk.senha
            return item
        })
*/

        return response.json(retorno)

    }

    @Get('data-hoje')
    async  indexIdUsuarioDataHoje (request: Request , response: Response){

        try {

            let retorno = await  Atendimentos.find({
                where: {dataCadastro : new Date()}
            } )

             /* const ret = retorno.map(item => {

                delete item.usuariosIdFk.senha
                delete item.usuariosIdFk.tipoUsuarioIdFk
                delete item.usuariosIdFk.bloqueioUsuario
                delete item.empresasIdFk.fantasiaEmpresa
                delete item.usuariosIdFk.senha
                   return item
            })
*/
            return response.json(retorno)

        } catch (err) {
            return response.json({err , message: err.message})
        }

    }

    @Post()
    async cadastrarAtendimentos(request: Request , response: Response){
        const empresa = new Empresas()
        const usuario = new Usuarios()
        const atendimentos = new Atendimentos()

        const atendimentoRepository = getRepository(Atendimentos)

        empresa.id = Number(request.body.empresa)

        usuario.id = Number(request.body.decoded.id)

        atendimentos.dataCadastro = new Date()
        atendimentos.descricaoAtendimento = String(request.body.descricaoAtendimento)
        atendimentos.pendente = Boolean(request.body.pendente)
        atendimentos.usuariosIdFk = usuario
        atendimentos.empresasIdFk = empresa

        const retornoAtendimenos = await atendimentoRepository.save(atendimentos)

        return response.json(retornoAtendimenos)

    }

    @Delete()
    async deletarAtendimentos(request: Request , response: Response){

        const params = request.params.id

        const atendimentoRepository = getRepository(Atendimentos)
        const atendimento = new Atendimentos()

        atendimento.id = Number(params)

        await atendimentoRepository.delete(atendimento.id)
        return response.json({deletado: atendimento.id})


    }

    async alterAtendimentos (request: Request , response: Response){}

}