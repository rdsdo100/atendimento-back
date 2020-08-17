import {Request, Response} from "express";
import VerificadorPrioridade from "./util/VerificadorPrioridade";

export  default  class CadastroAtendimentos {



    index (request: Request , response: Response){

    }



    indexIdUsuario (request: Request , response: Response){

const verificarPrioridade = new VerificadorPrioridade()

        if(verificarPrioridade.isUserAdm(Number(request.body.decoded.tipoUsuario)))
        {
            return response.json({message: "Acesso Negado!"})
        }

        return response.json({message: true})







    }


}