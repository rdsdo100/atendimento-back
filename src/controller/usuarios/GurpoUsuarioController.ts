import { ClassMiddleware, Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from 'express'
import GrupoUsuariosBusiness from "../../business/usuarios/GrupoUsuariosBusiness";
import { decodificar } from "../../config/Jwt";

@Controller('gupo-usuario')
@ClassMiddleware([decodificar])
export default class GurpoUsuarioController {

  @Get()
  async index(_: Request, response: Response) {

const grupoUsuarios = new GrupoUsuariosBusiness()
const resposta = await grupoUsuarios.index()

return response.json(resposta)

  
    
  }
}