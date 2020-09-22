import { Controller , Get, Post } from "@overnightjs/core";
import { getRepository } from "typeorm";
import { Usuarios } from "../entity/Usuarios";

@Controller('user')
export default class Ususrio {

    @Get()
    index(request: Request , response: Response){

    }

    @Post()
    async cadastroUsuarios(request: Request , response: Response){
      
        const usuarios = new Usuarios()
        const setUsuarios = getRepository(Usuarios)

        try{

usuarios.nome = 'rubens'
usuarios.email = 'rdsdo2011@gmail.com'
usuarios.senha = '123456'

await setUsuarios.save(usuarios)

        } catch (err) {

        }
        

    }



}