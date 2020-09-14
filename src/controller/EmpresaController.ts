import {Request, Response} from "express";
import {getRepository} from "typeorm/index";
import {Empresas} from "../entity/Empresas";
import VerificadorPrioridade from "./util/VerificadorPrioridade";
import { ClassMiddleware, Controller, Get, Post } from '@overnightjs/core';
import { decodificar } from '../config/Jwt';

@Controller('empresas')
@ClassMiddleware([decodificar])
export default  class EmpresaController{

@Get()
    async  index (request: Request , response: Response) {

        const getEmpresa = getRepository(Empresas)
        const retorno = await getEmpresa.find()

        return response.json(retorno)

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