import { Controller, Get } from '@overnightjs/core';
import {getRepository} from "typeorm/index";
import {Usuarios} from "@src/entity/Usuarios";
import {Request, Response} from "express";
import {assinar} from "@src/config/Jwt";
import {TipoUsuario} from "@src/entity/TipoUsuario";

@Controller("login")
export default class LoginController{

  /*  async index(request: Request , response: Response) : Promise<void> {

    }
*/
    @Get()
    async login(request: Request , response: Response): Promise<void> {

        try {
            const usuariosRepository = getRepository(Usuarios)
            const usuario = new Usuarios()
            const tipoUsuarios = new TipoUsuario()

            usuario.nomeUsuario = String(request.headers.user)
            usuario.senha = String(request.headers.password)

            const getUsuario = await usuariosRepository.findOne(

                {
                    where: [
                        {nomeUsuario: usuario.nomeUsuario}
                    ]
                }
            )

            if ((!getUsuario?.nomeUsuario) || (getUsuario?.senha != usuario.senha)) {
                 response.json({message: "Usuario  ou senha incorreto!"})
            }


            const authorization = assinar(Number(getUsuario?.id),
                String(getUsuario?.nomeUsuario),
                Number(getUsuario?.tipoUsuarioIdFk.id))

             response.json({
                id: getUsuario?.id,
                nomeUsuario: getUsuario?.nomeUsuario,
                authorization
            })

        } catch (error) {

            response.json(error)

        }
    }
}