import {Request, Response} from "express";
import {Usuarios} from "@src/entity/Usuarios";
import {getRepository} from "typeorm/index";
import {TipoUsuario} from "@src/entity/TipoUsuario";

export default class UsuariosController {

    async index(request: Request , response: Response) :Promise<void> {

        if(Number(request.body.decoded.tipoUsuario) !== 1){
             response.json({message: "Acesso Negado!"})
        }

    }

    async cadastroUsuario(request: Request , response: Response) :Promise<void> {

        if(Number(request.body.decoded.tipoUsuario) !== 1){
             response.json({message: "Acesso Negado!"})
        }

        const usuarioRepository = getRepository(Usuarios)

        const tipoUsuario = new TipoUsuario()
        const usuarios = new Usuarios()
        usuarios.nomeUsuario = String(request.body.nomeUsuario)
        usuarios.senha = String(request.body.senha)
        usuarios.email= String(request.body.email)
        usuarios.matriculaUsuario = String(request.body.matrcula)
        tipoUsuario.id = Number(request.body.tipoUsuaruio)
        usuarios.tipoUsuarioIdFk = tipoUsuario
        const volta = await usuarioRepository.save(usuarios)
         response.json(volta)

    }

    async deleteUsuario(request: Request , response: Response) :Promise<void> {
        if(Number(request.body.decoded.tipoUsuario) !== 1){
             response.json({message: "Acesso Negado!"})
        }

        const params = request.params.id
        const usuarioRepository = getRepository(Usuarios)
        const usuarios = new Usuarios()

        if(Number(request.body.decoded.tipoUsuario) !== Number(params)){
             response.json({message: `Não e permitido Deletar ${params} `})
        }

        usuarios.id = Number(params)

        await usuarioRepository.delete(usuarios.id)
         response.json({deletado: usuarios.id})

    }

    async alterUsuario(request: Request , response: Response):Promise<void> {

        if(Number(request.body.decoded.tipoUsuario) !== 1){
             response.json({message: "Acesso Negado!"})
        }

        const usuarioRepository = getRepository(Usuarios)
        const usuarios = new Usuarios()

        usuarios.nomeUsuario = String(request.body.nomeUsuario)
        usuarios.senha = String(request.body.senha)
        usuarios.email= String(request.body.email)
        usuarios.matriculaUsuario = String(request.body.matrcula)

        if(Number(request.body.decoded.tipoUsuario) !== Number(usuarios.id)){
             response.json({message: `Não e permitido Deletar ${usuarios.id} `})
        }

        const volta = await usuarioRepository.update( usuarios.id , usuarios)
         response.json(volta)

    }
}