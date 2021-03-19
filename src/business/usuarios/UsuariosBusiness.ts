import { Request, Response } from "express";
import { Usuarios } from "../../entity/Usuarios";
import { getRepository } from "typeorm";
import { buscarUsuarioGrupoUsuarioId, buscarUsuarioRepositoryAll, deleteUsuarioIdRepository, insertUsuarioRpository, updateUsuarioRepository } from "../../repository/usuarioRepository";
import { GrupoUsuarios } from "../../entity/GrupoUsuarios";

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

   



    
    async updateUsuariO(usuario: Usuarios ): Promise<any> {

        const usuarioUpdate = await updateUsuarioRepository(usuario)
        return usuarioUpdate

    }



    async deletarUsuario(idUsuarioDelete: number, idUsuario: number) {
       
        const usuariosDelete = new Usuarios()
        const grupoUsuariosDelete = new GrupoUsuarios()
       
        const usuarios: any = await buscarUsuarioGrupoUsuarioId(idUsuario)

       
        usuariosDelete.id = usuarios.id
        grupoUsuariosDelete.id = usuarios.grupoUsuariosIdFK.id
        usuariosDelete.grupoUsuariosIdFK = grupoUsuariosDelete



        if (grupoUsuariosDelete.id <= 2) {

          await deleteUsuarioIdRepository(idUsuarioDelete)
               
                return 'Usuário Deletado!'
            } else {
                return `Usuário ${idUsuarioDelete}, não deletado!`
            }
        } 

            
        

    

}