import {Request, Response} from "express";
import {getRepository} from "typeorm/index";
import {Empresas} from "../entity/Empresas";
import VerificadorPrioridade from "./util/VerificadorPrioridade";
import { ClassMiddleware, Controller, Get, Post } from '@overnightjs/core';
import { decodificar } from '../config/Jwt';
import { GrupoEmpresa } from '../entity/GrupoEmpresa';

@Controller('empresas')
@ClassMiddleware([decodificar])
export default  class EmpresaController{

    @Get()
    async  index (request: Request , response: Response) {
        try {
            const getEmpresa = getRepository(Empresas)
            const retorno = await getEmpresa.find()

            return response.json(retorno)

        } catch (err){
            return response.json(err)
        }

    }

    @Get('grupo-empresas')
    async indexGrupoEmpresas(request: Request , response: Response){

        try {
            const getGrupoEmpresa = getRepository(GrupoEmpresa)
            const retorno = await getGrupoEmpresa.find()

            return response.json(retorno)

        } catch (err){
            return response.json(err)
        }


    }

    @Post()
    async cadastroEmoresa(request: Request , response: Response){

        const verificadorPrioridade = new VerificadorPrioridade()
        if( verificadorPrioridade.isUserAdm(Number(request.body.decoded.id))) {
            response.json({message: "Acesso Negado!"})
        }

        const empresaRepostory = getRepository(Empresas)
        const empresa = new  Empresas()
        empresa.codEmpresa = String(request.body.codEmpresa)
        empresa.fantasiaEmpresa = String(request.body.fantasiaEmpresa)
        empresa.razaoEmpresa = String(request.body.razaoEmpresa)

        try {
            const retorno = await empresaRepostory.save(empresa)
            return response.json(retorno)
        }catch (err){
            return response.json(
              {
                  message: "Empreas Não cadastrada" ,
                  err
              }
            )
        }
    }

    async alterEmpresa(request: Request , response: Response){}
}