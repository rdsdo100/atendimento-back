import { ClassMiddleware, Controller, Get } from "@overnightjs/core";
import { decodificar } from "../../config/Jwt";
import { Request, Response } from "express";
import GrupoEmpresasBusiness from "../../business/empresas/GrupoEmpresasBusiness";

@Controller('grupo-empresa')
@ClassMiddleware([decodificar])
export default class GrupoEmpresasController {
readonly grupoEmpresaBusiness = new GrupoEmpresasBusiness

    @Get()
    async buscarEmpresas(request: Request, response: Response) {


        const retornoBuscaEmpresa = await this.grupoEmpresaBusiness.listarGrupoEmpresas()
        return response.status(200).json(retornoBuscaEmpresa)

    }

}