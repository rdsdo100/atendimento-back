import { Request, Response } from "express";
import { ClassMiddleware, Controller, Get, Post, Delete, Put } from "@overnightjs/core";
import { Atendimentos } from "../../entity/Atendimentos";
import AtendimentosBusiness from "../../business/atendimentos/AtendimentosBusiness";
import { Empresas } from "../../entity/Empresas";
import { Usuarios } from "../../entity/Usuarios";
import { decodificar } from "../../config/Jwt";
import { ContatosTelefones } from "../../entity/ContatosTelefones";
import { ContatosPessoas } from "../../entity/ContatosPessoas";
import { PessoasTelefones } from "../../entity/PessoasTelefones";
import ContatosBusiness from "../../business/contatos/ContatosBusiness";

@Controller('contatos')
@ClassMiddleware([decodificar])
export default class ContatosController {

readonly contatosTelefones = new ContatosTelefones
readonly contatosPessoas = new ContatosPessoas
readonly pessoasTelefones = new PessoasTelefones
readonly contatosBusiness = new ContatosBusiness

    @Get()
    async buscarContatosUsuarios(request: Request, response: Response) { }

    @Post()
    async cadastrarContatoss(request: Request, response: Response) { }

    @Delete(":id")
    async deletarContatos(request: Request, response: Response) { }

    @Put()
    async updadeContatos(request: Request, response: Response) { }


}