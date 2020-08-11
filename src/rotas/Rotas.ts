import express from 'express'

import Jwt from "../config/jwt";
import CadastroUsuario from "../controller/CadastroUsuario";
const route = express.Router()

const cadastroUsuarios = new CadastroUsuario()

const jwt = new Jwt()

route.get('/' , (req , res)=>{
    res.send({ok : 'Funcionando' , Name: 'Rubens'})
})

route.post('/usuarios' , cadastroUsuarios.cadastroUsuario )


export default route


