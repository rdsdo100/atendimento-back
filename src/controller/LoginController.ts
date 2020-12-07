import {getRepository} from "typeorm/index";
import {Request, Response} from "express";
import { Controller, Get } from '@overnightjs/core';
import {Usuarios} from "../entity/Usuarios";
import {GrupoUsuarios} from "../entity/GrupoUsuarios";
import {assinar} from "../config/Jwt";
import LoginBusiness from "../business/LoginBusiness";

@Controller('login')
export default class LoginController{

    async index(request: Request , response: Response){

    }

    @Get()
    async login(request: Request , response: Response) {

        try {

            const usuario = new Usuarios()
            const loginBusiness = new LoginBusiness()

            usuario.nome = String(request.headers.user)
            usuario.senha = String(request.headers.password)
            loginBusiness.login(usuario)


        } catch (error) {

            response.json(error)

        }
    }
}