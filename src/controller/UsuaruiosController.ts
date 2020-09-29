import {Controller, Delete, Get, Post} from "@overnightjs/core";
import { getRepository } from "typeorm";
import { Usuarios } from "../entity/Usuarios";
import {Request , Response} from 'express'
import { string } from "@hapi/joi";

@Controller('user')
export default class UsuaruiosController {



    @Get()
    async index(request: Request , response: Response){

        const usuarios = new Usuarios()
        const setUsuarios = getRepository(Usuarios)
        try {
            const resposta = await setUsuarios.find()
            response.json( resposta )

        } catch (err){
            response.json( {
                mesage : err.mesage ,
                err} )
        }
    }

    @Post()
    async cadastroUsuarios(request: Request , response: Response){

        const usuarios = new Usuarios()
        const setUsuarios = getRepository(Usuarios)

        try {

usuarios.nome = String(request.body.nome)
usuarios.email = String(request.body.email)
usuarios.senha = String(request.body.senha)
usuarios.matricula = String(request.body.matricula)
usuarios.usuariosIdfK.id = Number(request.body.grupoUsuario)

            const resposta = await setUsuarios.save(usuarios)
            response.json( resposta )
        } catch (err) {
            response.json( {
                mesage : err.mesage ,
                err} )
        }

    }

    @Delete(':id')
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