import { Usuarios } from "../../entity/Usuarios";
import { GrupoUsuarios } from "../../entity/GrupoUsuarios";
import UsuarioRepository from "../../repository/UsuarioRepository";



export default class UsuariosBusiness {

    readonly usuarioRepository = new UsuarioRepository

    async buscarUsuariosall(grupoUsuarioId: number) {

        let retornoUsuariosAllList: Usuarios[]

        if (grupoUsuarioId <= 3) {
            let retornoUsuariosAll: any = await this.usuarioRepository.buscarUsuarioRepositoryAll()
            

            retornoUsuariosAllList = retornoUsuariosAll.map((user: any) => {

                let retMap = new Usuarios()

                retMap.id = user.id
                retMap.nomeUsuario = user.nomeUsuario
                retMap.email = user.nomeUsuario
                retMap.senha = user.senha
                retMap.ativo = user.ativo
                retMap.bloqueado = user.bloqueado
                retMap.grupoUsuariosIdFK = user.grupoUsuariosIdFK
                retMap.tipoEquipeIdFK = user.tipoEquipeIdFK

                return retMap


            
            })

            return retornoUsuariosAllList
            
        } else {
            console.log("nada")
        }

      

    }

    async cadastroUsuariosBuisiness(usuario: Usuarios) {

        try {
            const resposta = await this.usuarioRepository.insertUsuarioRpository(usuario)
            return resposta
        } catch (err) {
            return {
                mesage: err.mesage,
                err
            }
        }

    }

    
    async updateUsuario(usuario: Usuarios ): Promise<any> {

        const usuarioUpdate = await this.usuarioRepository.updateUsuarioRepository(usuario)
        return usuarioUpdate

    }

    async deletarUsuario(idUsuarioDelete: number, idUsuario: number) {
       
        const usuariosDelete = new Usuarios()
        const grupoUsuariosDelete = new GrupoUsuarios()
       
        const usuarios: any = await this.usuarioRepository.buscarUsuarioGrupoUsuarioId(idUsuario)

       
        usuariosDelete.id = usuarios.id
        grupoUsuariosDelete.id = usuarios.grupoUsuariosIdFK.id
        usuariosDelete.grupoUsuariosIdFK = grupoUsuariosDelete

        if (grupoUsuariosDelete.id <= 2) {

          await this.usuarioRepository.deleteUsuarioIdRepository(idUsuarioDelete)
               
                return 'Usuário Deletado!'
            } else {
                return `Usuário ${idUsuarioDelete}, não deletado!`
            }
        } 

}