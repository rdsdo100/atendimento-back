import {Usuarios} from "../../entity/Usuarios";
import {assinar} from "../../config/Jwt";
import {buscarUsuarioRepository} from "../../repository/usuarioRepository";

export  default class LoginBusiness {


    async index(){

    }

    async login(usuario: Usuarios) {

        try {

            const getUsuario = await buscarUsuarioRepository(usuario.nomeUsuario)

console.log(getUsuario)

            if ((!getUsuario?.nomeUsuario) || (getUsuario?.senha != usuario.senha)) {
                return ({message: "Usuario  ou senha incorreto!"})

            }else {

                console.log(String(getUsuario.grupoUsuariosIdFK))

                const authorization = await assinar(Number(getUsuario.id),
                    String(getUsuario.nomeUsuario))



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