import { Controller, Get } from "@overnightjs/core";
import {Request, Response} from "express";
import {Nivel} from '../util/Nivel'

@Controller('exemplos')
export default class Exemplos {

@Get('rotas')
exemploRotas (_: Request , response: Response){
response.json({})

}

@Get('login')
exemplologin (_: Request , response: Response){
response.json({})

}


}
