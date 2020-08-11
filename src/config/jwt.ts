import {NextFunction, Request, Response} from "express";
import jwt from 'jsonwebtoken'
export default class Jwt{

    assinar(id:string , nomeUsuario:string , tipo:string ){

        const token = jwt.sign(
            {id, nomeUsuario } ,
            String(process.env.CHAVE_TOKEN)  ,
            {expiresIn: '1d'})
      return token

    }

    decodificar(request:Request , response: Response, next:NextFunction){

        let authorization=  String(request.headers.authorization)

        jwt.verify(authorization ,
            String(process.env.CHAVE_TOKEN),
            (err:any , decoded: any) =>{
            if(err){
                return response.json({
                    err ,
                    menssage: "invalido!!!!" ,
                isvalid: false

                })

            }

            request.body.decoded = decoded

            return next()

        })

    }
}