import {Request, Response} from "express";
import VerificadorPrioridade from "./util/VerificadorPrioridade";
import {Usuarios} from "../entity/Usuarios";
import {Atendimentos} from "../entity/Atendimentos";
import {Empresas} from "../entity/Empresas";
import {Between, getRepository} from "typeorm/index";

export  default  class AtendimentosController {

    async index (request: Request , response: Response){

        const verificarPrioridade = new VerificadorPrioridade()

        if(verificarPrioridade.isUserAdm(Number(request.body.decoded.tipoUsuario)))
        {
            return response.json({message: "Acesso Negado!"})
        }

        const dataInicio = request.headers.datainicio
        const dataFim = request.headers.datafim

        console.log(dataFim , dataInicio)
        const atendimentoRepository = getRepository(Atendimentos)

        const retorno = await atendimentoRepository.find(
            {
                where:  {dataCadastro: Between(dataInicio, dataFim)}
            }
        )

        return response.json(retorno)

    }

    async  indexIdUsuarioDataHoje (request: Request , response: Response){

        const verificarPrioridade = new VerificadorPrioridade()

        if(verificarPrioridade.isUserAdm(Number(request.body.decoded.tipoUsuario)))
        {
            return response.json({message: "Acesso Negado!"})
        }

        const atendimentoRepository = getRepository(Atendimentos)

        const retorno = await atendimentoRepository.find(
            {
                where:{dataCadastro: new Date(),
                    usuariosIdFk : Number(request.body.decoded.tipoUsuario)}
            }
        )


        retorno.map(retorno =>{
            delete retorno.usuariosIdFk.senha
            delete retorno.usuariosIdFk.bloqueioUsuario
            delete retorno.usuariosIdFk.matriculaUsuario
            delete retorno.usuariosIdFk.email
            delete retorno.usuariosIdFk.tipoUsuarioIdFk
        })

        return  response.json(retorno)

    }

    async cadastrarAtendimentos(request: Request , response: Response){
        const empresa = new Empresas()
        const usuario = new Usuarios()
        const atendimentos = new Atendimentos()

        const atendimentoRepository = getRepository(Atendimentos)

        empresa.id = Number(request.body.empresa)

        usuario.id = Number(request.body.decoded.id)

        atendimentos.dataCadastro = new Date()
        atendimentos.descricaoAtendimento = String(request.body.descricaoAtendimento)
        atendimentos.pendente = Boolean(request.body.pendente)
        atendimentos.usuariosIdFk = usuario
        atendimentos.empresasIdFk = empresa

        const retornoAtendimenos = await atendimentoRepository.save(atendimentos)

        return response.json(retornoAtendimenos)

    }


}