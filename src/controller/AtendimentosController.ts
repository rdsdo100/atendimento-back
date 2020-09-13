import {ClassMiddleware, Controller, Get} from '@overnightjs/core';
import {Request, Response} from "express";
import VerificadorPrioridade from "./util/VerificadorPrioridade";
import {Usuarios} from "@src/entity/Usuarios";
import {Atendimentos} from "@src/entity/Atendimentos";
import {Empresas} from "@src/entity/Empresas";
import {Between, getRepository} from "typeorm/index";
import {decodificar} from '@src/config/Jwt'



@Controller('atendimentos')
@ClassMiddleware([decodificar])
export  default  class AtendimentosController {

<<<<<<< HEAD
    @Get('' )
    async index (request: Request , response: Response) : Promise<void>{

=======
>>>>>>> parent of d299de3... ok
        const verificarPrioridade = new VerificadorPrioridade()

        if(verificarPrioridade.isUserAdm(Number(request.body.decoded.tipoUsuario)))
        {
             response.json({message: "Acesso Negado!"})
        }

        const dataInicio = request.headers.datainicio
        const dataFim = request.headers.datafim

        const atendimentoRepository = getRepository(Atendimentos)

        const retorno = await atendimentoRepository.find(
            {
                where:  {dataCadastro: Between(dataInicio, dataFim)}
            }
        )

         response.json(retorno)

    }

    async  indexIdUsuarioDataHoje (request: Request , response: Response): Promise<void> {

<<<<<<< HEAD
        try {

            const retorno = await  Atendimentos.find({
                where: {dataCadastro : new Date()}
            } )
=======
        const verificarPrioridade = new VerificadorPrioridade()

        if(!verificarPrioridade.isUserAdm(Number(request.body.decoded.tipoUsuario)))
        {
            return response.json({message: "Acesso Negado!"})
        }
>>>>>>> parent of d299de3... ok

            const ret = retorno.map(item => {

                delete item.usuariosIdFk.senha
                delete item.usuariosIdFk.tipoUsuarioIdFk
                delete item.usuariosIdFk.bloqueioUsuario
                delete item.empresasIdFk.fantasiaEmpresa
                   return item
            })

             response.json(ret)

        } catch (err) {
             response.json({err , message: err.message})
        }

    }

    async cadastrarAtendimentos(request: Request , response: Response) : Promise<void>{
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

         response.json(retornoAtendimenos)

    }

    async deletarAtendimentos(request: Request , response: Response) : Promise<void>{

        const params = request.params.id

        const atendimentoRepository = getRepository(Atendimentos)
        const atendimento = new Atendimentos()

        atendimento.id = Number(params)

        await atendimentoRepository.delete(atendimento.id)
         response.json({deletado: atendimento.id})


    }



}