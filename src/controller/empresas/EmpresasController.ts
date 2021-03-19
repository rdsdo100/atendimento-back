import { Request, Response } from "express";
import { ClassMiddleware, Controller, Delete, Get, Post, Put } from "@overnightjs/core";
import EmpresasBusiness from "../../business/empresas/EmpresasBusiness";
import { Empresas } from "../../entity/Empresas";
import { decodificar } from "../../config/Jwt";

@Controller('empresa')
@ClassMiddleware([decodificar])
export default class EmpresasController {

    @Get()
    async buscarEmpresas(request: Request, response: Response) {

        const empresasBusiness = new EmpresasBusiness()
        const retornoBuscaEmpresa = await empresasBusiness.listarEmpresas()
        return response.status(200).json(retornoBuscaEmpresa)

    }

    @Post()
    async cadastrarEmpresa(request: Request, response: Response) {
        const empresa = new Empresas()
        const empresasBusiness = new EmpresasBusiness()

        empresa.codigoEmpresa = String(request.body.codigoEmpresa)
        empresa.nomeEmpresa = String(request.body.nomeEmpresa)

        const retornoinsertEmpresa = await empresasBusiness.cadastrarEmpresas(empresa)
        return response.status(200).json(retornoinsertEmpresa)

    }

    @Delete(":id")
    async deletarEmpresa(request: Request, response: Response) {
        const usuarioId = Number(request.body.decoded.id)
        const deletar = Number(request.params.id)
        let message: string = ''
        const empresasBusiness = new EmpresasBusiness()
        message = await empresasBusiness.deletarAtendimentos(deletar, usuarioId)

        response.json({ message })
    }

    @Put()
    async updadeEmpresa({ request, response }: { request: Request; response: Response; }) {
        const empresa = new Empresas()
        const empresasBusiness = new EmpresasBusiness()

        empresa.id = Number(request.body.id)
        empresa.codigoEmpresa = String(request.body.codigoEmpresa)
        empresa.nomeEmpresa = String(request.body.nomeEmpresa)
        const empresaUpdate = await empresasBusiness.updateEmpresa(empresa)

        return response.status(200).json(empresaUpdate)
    }

}