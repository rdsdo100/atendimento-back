import {getRepository} from "typeorm";
import {Usuarios} from "../entity/Usuarios";
import {assinar} from "../config/Jwt";

export  default class LoginBusiness {


    async index(){

    }

    async login(usuario: Usuarios) {

        try {

            const usuariosRepository = getRepository(Usuarios)

            const getUsuario = await usuariosRepository.findOne(

                {

                    where: [
                        {nomeUsuario: usuario.nome}
                    ]
                }
            )

            if ((!getUsuario?.nome) || (getUsuario?.senha != usuario.senha)) {
                return ({message: "Usuario  ou senha incorreto!"})
            }

            const authorization = assinar(Number(getUsuario.id),
                String(getUsuario.nome),
                Number(getUsuario.usuariosIdfK.id))

            return {
                id: getUsuario.id,
                nomeUsuario: getUsuario.nome,
                authorization
            }

        } catch (error) {

           return error

        }
    }

}