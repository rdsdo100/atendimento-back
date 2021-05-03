import { Request, Response } from "express";
import { Controller, Post } from "@overnightjs/core";
import ValidacaoCpfCnpjBusiness from "../../business/validacao/ValidacaoCpfCnpjBusiness";



@Controller('validar')
//@ClassMiddleware([decodificar])
export default class ValidacaoCpfCnpjController {
readonly validacaoCpfCnpjBusiness = new ValidacaoCpfCnpjBusiness()

    @Post()
    async buscarAtendimentoUsuarios(request: Request, response: Response) {

        const cpfCnpj: string = String(request.body.cpfCnpj)

const  retorno =  this.validacaoCpfCnpjBusiness.validarCpfCnpj(cpfCnpj)


        return response.status(200).json(retorno)
    }





}