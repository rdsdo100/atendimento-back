import express from 'express'

import Jwt from "../config/Jwt";
import UsuariosController from "../controller/UsuariosController";
import LoginController from "../controller/LoginController";
import AtendimentosController from "../controller/AtendimentosController";
const route = express.Router()

const usuariosController = new UsuariosController()
const atendimentosController = new AtendimentosController()
const loginController = new LoginController()

const jwt = new Jwt()

route.get('/' , (req , res)=>{
    res.send({ok : 'Funcionando' , Name: 'Rubens'})
})

route.post('/usuarios' , jwt.decodificar, usuariosController.cadastroUsuario )
route.get('/usuarios' ,jwt.decodificar, usuariosController.index )

route.get('/atendimentos' , jwt.decodificar , atendimentosController.indexIdUsuario)
route.post('/atendimentos' , jwt.decodificar , atendimentosController.cadastrarAtendimentos)


route.get('/login' , loginController.login )

export default route


