import {Request, Response} from "express";




export default class ExemplosJson {


    async  index (request: Request , response: Response) {


        return response.json({

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

    async  indexLoginExemplos (request: Request , response: Response) {


        return response.json({
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