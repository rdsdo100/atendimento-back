import {Request, Response} from "express";
import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import EmpresasBusiness from "../../business/empresas/EmpresasBusiness";
import {Empresas} from "../../entity/Empresas";
import { decodificar } from "../../config/Jwt";

@Controller('empresa')
@ClassMiddleware([decodificar])
export default  class EmpresasController {

    @Get()
    async buscarEmpresas(request: Request , response: Response) {

        const empresasBusiness = new EmpresasBusiness()
        const retornoBuscaEmpresa = await empresasBusiness.listarEmpresas()
        return response.status(200).json(retornoBuscaEmpresa)
        
    }

    @Post()
    async cadastrarEmpresa(request: Request , response: Response){
        const empresa = new Empresas()
        const empresasBusiness = new EmpresasBusiness()

        empresa.codigoEmpresa = String(request.body.codigoEmpresa)
        empresa.nomeEmpresa = String(request.body.nomeEmpresa)

        const retornoinsertEmpresa = await empresasBusiness.cadastrarEmpresas(empresa)
        return response.status(200).json(retornoinsertEmpresa)

    }
}