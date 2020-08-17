import express from 'express'

import Jwt from "../config/Jwt";
import CadastroUsuario from "../controller/CadastroUsuario";
import Login from "../controller/Login";
import CadastroAtendimentos from "../controller/CadastroAtendimentos";
const route = express.Router()

const cadastroUsuarios = new CadastroUsuario()
const cadastroAtendimentos = new CadastroAtendimentos()
const login = new Login()

const jwt = new Jwt()

route.get('/' , (req , res)=>{
    res.send({ok : 'Funcionando' , Name: 'Rubens'})
})

route.post('/usuarios' , jwt.decodificar, cadastroUsuarios.cadastroUsuario )
route.get('/usuarios' ,jwt.decodificar, cadastroUsuarios.index )

route.get('/atendimentos' , jwt.decodificar , cadastroAtendimentos.indexIdUsuario)


route.get('/login' , login.login )

export default route


