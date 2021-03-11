import { Request, Response } from "express";
import { Usuarios } from "../../entity/Usuarios";
import { getRepository } from "typeorm";
import { buscarUsuarioRepositoryAll, insertUsuarioRpository } from "../../repository/usuarioRepository";

export default class UsuariosBusiness {

    async buscarUsuariosall(grupoUsuarioId: number) {

        let retornoUsuariosAllList: Usuarios[]

        if (grupoUsuarioId <= 3) {
            let retornoUsuariosAll: any = await buscarUsuarioRepositoryAll()
            

            retornoUsuariosAllList = retornoUsuariosAll.map((user: any) => {

                let retMap = new Usuarios()

                retMap.id = user.id
                retMap.nomeUsuario = user.nomeUsuario
                retMap.email = user.nomeUsuario
                retMap.senha = user.senha
                retMap.matricula = user.matricula
                retMap.ativo = user.ativo
                retMap.bloqueado = user.bloqueado
                retMap.grupoUsuariosIdFK = user.grupoUsuariosIdFK

                return retMap


            
            })

            return retornoUsuariosAllList
            
        } else {
            console.log("nada")
        }

      

    }

    async cadastroUsuariosBuisiness(usuario: Usuarios) {

        try {
            const resposta = await insertUsuarioRpository(usuario)
            return resposta
        } catch (err) {
            return {
                mesage: err.mesage,
                err
            }
        }

    }

    async deletarUsuario(request: Request, response: Response) {
        const deletar = Number(request.params.id)

        const setUsuarios = getRepository(Usuarios)

        const resposta = await setUsuarios.findOne({
            where: {
                id: deletar
            }
        })
        response.json(resposta)

    }

}