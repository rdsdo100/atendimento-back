import { Request, Response } from "express";
import { ClassMiddleware, Controller, Get, Post, Delete, Put } from "@overnightjs/core";
import { decodificar } from "../../config/Jwt";
import { ContatosTelefones } from "../../entity/ContatosTelefones";
import { ContatosPessoas } from "../../entity/ContatosPessoas";
import ContatosBusiness from "../../business/contatos/ContatosBusiness";
import { Empresas } from "../../entity/Empresas";


@Controller('contato')
//@ClassMiddleware([decodificar])
export default class ContatosController {

readonly contatosTelefones = new ContatosTelefones
readonly contatosPessoas = new ContatosPessoas

readonly empresa = new Empresas
readonly contatosBusiness = new ContatosBusiness

    @Get()
    async buscarContatosUsuarios(request: Request, response: Response) { }

    @Post()
    async cadastrarContatos(request: Request, response: Response) { 

        this.empresa.id = Number(request.body.idEmpresa)

        this.contatosPessoas.nome = String(request.body.nome)
        this.contatosPessoas.cargo = String(request.body.cargo)
        this.contatosPessoas.empresasIdFK = this.empresa

        this.contatosTelefones.dd = String(request.body.telefones.dd)
        this.contatosTelefones.telefone = String(request.body.telefones.telefone)
        this.contatosTelefones.descricao = String(request.body.telefones.descricao)

        const retorno = await this.contatosBusiness.cadastrarContatos(this.contatosPessoas , this.contatosTelefones)

        return response.status(200).json(retorno)



    }

    @Delete(":id")
    async deletarContatos(request: Request, response: Response) { }

    @Put()
    async updadeContatos(request: Request, response: Response) { }


}

/**
 * 
 * {  
    "idEmpresa": 1 ,
    "nome": "Rubens",
	"cargo": "Suporte" ,
    "telefones": {
    
    "dd": "62",
    "telefone": "991544066",
			"descricao": "principal"
}	
}
 * 
 */