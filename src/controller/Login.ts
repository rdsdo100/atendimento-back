import {getRepository} from "typeorm/index";
import {Usuarios} from "../entity/Usuarios";
import {json, Request, Response} from "express";
import Jwt from "../config/Jwt";
export default class Login{


    async index(request: Request , response: Response){




    }

    async login(request: Request , response: Response) {

        const usuariosRepository = getRepository(Usuarios)
        const usuario = new Usuarios()
        const jwt= new  Jwt()
        usuario.nomeUsuario = String(request.headers.user)
        usuario.senha = String(request.headers.password)

        const getUsuario = await usuariosRepository.findOne(
            {
                where:[
                    {nomeUsuario: usuario.nomeUsuario }
                ]
            }
        )

        if((!getUsuario?.nomeUsuario) || (getUsuario?.senha != usuario.senha)){
            return response.json({message: "Usuario  ou senha incorreto!"})
        }


const authorization = jwt.assinar(Number(getUsuario?.id) ,
    String(getUsuario?.nomeUsuario) ,
    Number(getUsuario?.tipoUsuarioIdFk.id))

        return response.json({
            id: getUsuario?.id,
            nomeUsuario: getUsuario?.nomeUsuario,
            authorization})
    }

}