
import {Request, Response} from "express";
import {Controller, Get} from "@overnightjs/core";

@Controller('/')
export default class Inicio {

@Get()
    inicio (req: Request , res: Response) {
    res.send({ok : 'Funcionando' , Name: 'Rubens'})
}


}