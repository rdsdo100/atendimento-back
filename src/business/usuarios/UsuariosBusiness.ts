import {Request, Response} from "express";
import {Usuarios} from "../../entity/Usuarios";
import {getRepository} from "typeorm";
import { insertUsuarioRpository } from "../../repository/usuarioRepository";

export default  class UsuariosBusiness{

    async cadastroUsuariosBuisiness(usuario : Usuarios){

      

        try {
            const resposta = await insertUsuarioRpository(usuario)
            return   resposta
        } catch (err) {
            return   {
                mesage : err.mesage ,
                err}
        }

    }

    async deletarUsuario(request: Request , response: Response){
        const deletar = Number(request.params.id)

        const setUsuarios = getRepository(Usuarios)

        const resposta = await setUsuarios.findOne({
            where: {
                id : deletar
            }
        })
        response.json( resposta )

    }

}