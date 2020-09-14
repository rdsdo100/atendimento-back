import {Request, Response} from "express";
import {RequisicaoDesenvolvimento} from "../entity/RequisicaoDesenvolvimento";
import {Atendimentos} from "../entity/Atendimentos";
import {getRepository} from "typeorm";
import VerificadorPrioridade from "./util/VerificadorPrioridade";
import {Controller, Delete, Get, Middleware, Post, Put} from "@overnightjs/core";
import {decodificar} from "../config/Jwt";

@Controller('req-dev')
export  default class RequisicaoDesenvolvimentoController {
    @Get()
    @Middleware([decodificar])
    async index(request: Request , response: Response){

        const verificadorPrioridade = new VerificadorPrioridade()
        if(   !verificadorPrioridade.isUserAdm(Number(request.body.decoded.id))) {
            response.json({message: "Acesso Negado!"})
        }

        const requisicaoDevRepository = getRepository(RequisicaoDesenvolvimento)
        try {
            const retorno = await requisicaoDevRepository.find()
            return response.json(retorno)
        } catch (err){
            return response.json({
                message : "Não registrado!" ,
                err
            })
        }

    }

    @Post()
    @Middleware([decodificar])
    async cadastroRequisicao (request: Request , response: Response){


        const requisicaoDesenvolvimento = new RequisicaoDesenvolvimento()
        const atendimentos = new Atendimentos()
        const requisicaoDevRepository = getRepository(RequisicaoDesenvolvimento)

        requisicaoDesenvolvimento.descricao = String(request.body.descricao)
        requisicaoDesenvolvimento.dataCadastro = new Date()
        requisicaoDesenvolvimento.pendente = Boolean(request.body.pendente)
        atendimentos.id = Number(request.body.idAtentimento)
        requisicaoDesenvolvimento.atenimentoIdFk = atendimentos

        try {
            const retorno = await requisicaoDevRepository.save(requisicaoDesenvolvimento)
            return response.json(retorno)
        } catch (err){
            return response.json({
                message : "Não registrado!" ,
                err
            })
        }


    }

    @Put()
    @Middleware([decodificar])
    async alterRequisicao(request: Request , response: Response){}

    @Delete()
    @Middleware([decodificar])
    async deleteRequisicao(request: Request , response: Response){}
}