import {Usuarios} from "../../entity/Usuarios";
import {assinar} from "../../config/Jwt";
import {buscarUsuarioRepository} from "../../repository/usuarioRepository";

export  default class LoginBusiness {


    async index(){

    }

    async login(usuario: Usuarios) {

        try {

        let getUsuario:any

        getUsuario = await buscarUsuarioRepository(usuario.nomeUsuario)

            if ((!getUsuario?.nomeUsuario) || (getUsuario?.senha != usuario.senha)) {
                return ({message: "Usuario  ou senha incorreto!"})

            }else {

                const authorization = await assinar(Number(getUsuario.id),
                    String(getUsuario.nomeUsuario), Number(getUsuario.grupoUsuariosIdFK.id)
                )

                return {
                    id: getUsuario.id,
                    nomeUsuario: getUsuario.nomeUsuario,
                    authorization
                }
            }

        } catch (error) {

           return error

        }
    }

}