import {Request, Response} from "express";
import {getRepository} from "typeorm/index";
import {Empresas} from "@src/entity/Empresas";
import VerificadorPrioridade from "./util/VerificadorPrioridade";

export default  class EmpresaController{

    async  index (request: Request , response: Response): Promise<void> {

        const getEmpresa = getRepository(Empresas)
        const retorno = await getEmpresa.find()

         response.json(retorno)

    }

    async cadastrEmoresa(request: Request , response: Response): Promise<void> {

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
             response.json(retorno)
        }catch (err){
             response.json(
                {
                    message: "Empreas Não cadastrada" ,
                    err
                }
            )
        }
    }

/*
    async alterEmpresa(request: Request , response: Response){}
    */

}
