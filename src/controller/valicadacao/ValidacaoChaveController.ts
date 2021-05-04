import { Request, Response } from "express";
import { Controller, Post } from "@overnightjs/core";
import ValidacaoChaveBusiness from "../../business/validacao/ValidacaoChaveBusiness";



@Controller('validar-chave')
//@ClassMiddleware([decodificar])
export default class ValidacaoChaveController {
    readonly validacaoChaveBusiness = new ValidacaoChaveBusiness()

    @Post()
    async buscarAtendimentoUsuarios(request: Request, response: Response) {

        const chave: string = String(request.body.chave)

        const retorno = this.validacaoChaveBusiness.validarChave(chave)


        return response.status(200).json(retorno)
    }





}