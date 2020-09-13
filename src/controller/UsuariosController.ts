import {Request, Response} from "express";
import {Usuarios} from "../entity/Usuarios";
import {getRepository} from "typeorm/index";
import {TipoUsuario} from "../entity/TipoUsuario";

export default class UsuariosController {

    async index(request: Request , response: Response){

        if(Number(request.body.decoded.tipoUsuario) !== 1){
            return response.json({message: "Acesso Negado!"})
        }
        const usuariosRepository = getRepository(Usuarios)
        let getusuarios = await usuariosRepository.find()

        getusuarios.map(getusuarios => {
            delete getusuarios?.senha
        })

        return  response.json(getusuarios)
    }

    async cadastroUsuario(request: Request , response: Response){

        if(Number(request.body.decoded.tipoUsuario) !== 1){
            return response.json({message: "Acesso Negado!"})
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
        return response.json(volta)

    }

    async deleteUsuario(request: Request , response: Response){
        if(Number(request.body.decoded.tipoUsuario) !== 1){
            return response.json({message: "Acesso Negado!"})
        }

        const params = request.params.id
        const usuarioRepository = getRepository(Usuarios)
        const usuarios = new Usuarios()

        if(Number(request.body.decoded.tipoUsuario) !== Number(params)){
            return response.json({message: `Não e permitido Deletar ${params} `})
        }

        usuarios.id = Number(params)

        await usuarioRepository.delete(usuarios.id)
        return response.json({deletado: usuarios.id})

    }

    async alterUsuario(request: Request , response: Response){

        if(Number(request.body.decoded.tipoUsuario) !== 1){
            return response.json({message: "Acesso Negado!"})
        }

        const usuarioRepository = getRepository(Usuarios)
        const usuarios = new Usuarios()

        usuarios.nomeUsuario = String(request.body.nomeUsuario)
        usuarios.senha = String(request.body.senha)
        usuarios.email= String(request.body.email)
        usuarios.matriculaUsuario = String(request.body.matrcula)

        if(Number(request.body.decoded.tipoUsuario) !== Number(usuarios.id)){
            return response.json({message: `Não e permitido Deletar ${usuarios.id} `})
        }

        const volta = await usuarioRepository.update( usuarios.id , usuarios)
        return response.json(volta)

    }
}