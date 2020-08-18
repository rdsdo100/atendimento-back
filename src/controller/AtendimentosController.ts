import {Request, Response} from "express";
import VerificadorPrioridade from "./util/VerificadorPrioridade";
import {Usuarios} from "../entity/Usuarios";
import {Atendimentos} from "../entity/Atendimentos";
import {Empresas} from "../entity/Empresas";

export  default  class AtendimentosController {



    index (request: Request , response: Response){

    }



    indexIdUsuario (request: Request , response: Response){

const verificarPrioridade = new VerificadorPrioridade()

        if(verificarPrioridade.isUserAdm(Number(request.body.decoded.tipoUsuario)))
        {
            return response.json({message: "Acesso Negado!"})
        }








    }

    cadastrarAtendimentos(request: Request , response: Response){
        const empresa = new Empresas()
        const usuario = new Usuarios()
        const atendimentos = new Atendimentos()

        empresa.id = Number(request.body.empresa)

        usuario.id = Number(request.body.decoded.id)

        atendimentos.dataCadastro = new Date()
        atendimentos.descricaoAtendimento = String(request.body.descricaoAtendimento)
        atendimentos.pendente = Boolean(request.body.pendente)
        atendimentos.usuariosIdFk = usuario
        atendimentos.empresasIdFk = empresa

        return response.json({atendimentos})

    }


}