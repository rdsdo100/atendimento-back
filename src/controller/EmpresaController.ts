import {Request, Response} from "express";
import {getRepository} from "typeorm/index";
import {Empresas} from "../entity/Empresas";

export default  class EmpresaController{

    async  index (request: Request , response: Response) {

        const getEmpresa = getRepository(Empresas)
        const retorno = await getEmpresa.find()

        return response.json(retorno)



    }
    }