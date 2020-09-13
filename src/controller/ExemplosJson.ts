import {Request, Response} from "express";
import {Controller, Get} from '@overnightjs/core'

@Controller("exemplos")
export default class ExemplosJson {

@Get('cadastro')
    async  index (request: Request , response: Response) : Promise<void> {


         response.json({

            Posts: {
                atemdimentos: {
                    url: "/atendimentos" ,
                    body:{
                        empresa : "String" ,
                        descricaoAtendimento: "String" ,
                        pendente: "Boolean"
                    }
                } ,
                empresa: {
                    url: "/cad-empresa" ,
                    body: {
                        codEmpresa: "string",
                        fantasiaEmpresa: "string",
                        razaoEmpresa: "string"
                    }
                } ,
                usuario: {
                    url: "/usuarios" ,
                    body: {
                        nomeUsuario: "string" ,
                        senha: "string" ,
                        email: "string" ,
                        matrcula: "string" ,
                        tipoUsuaruio: "number"
                    }
                } ,
                requisicaoDesenvolvimento: {
                    url: "/desenvolvimento" ,
                    body: {
                        descricao: "string" ,
                        pendente: "string" ,
                        idAtentimento: "number" ,
                    }
                }
            }



        })

    }
@Get('login-exemplos')
    async  indexLoginExemplos (request: Request , response: Response) : Promise<void> {


         response.json({
            Get: {
                login: {
                    url: "/login",
                    headers: {
                        user:"string",
                        password:"string"
                    }
                }
            }


        })
    }

}