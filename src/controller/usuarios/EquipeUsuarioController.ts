import { ClassMiddleware, Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from 'express'
import EquipeUsuariosBusiness from "../../business/usuarios/EquipeUsuariosBusiness";
import { decodificar } from "../../config/Jwt";

@Controller('equipe-usuario')
@ClassMiddleware([decodificar])
export default class EquipeUsuarioController {

  @Get()
  async index(_: Request, response: Response) {

const equipeUsuarios = new EquipeUsuariosBusiness()
const resposta = await equipeUsuarios.index()

return response.json(resposta)

  
    
  }
}