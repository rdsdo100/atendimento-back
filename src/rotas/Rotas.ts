import express from 'express'

import Jwt from "../config/Jwt";
import UsuariosController from "../controller/UsuariosController";
import LoginController from "../controller/LoginController";
import AtendimentosController from "../controller/AtendimentosController";
import EmpresaController from "../controller/EmpresaController";

import {celebrate , Joi } from 'celebrate'


const route = express.Router()

const usuariosController = new UsuariosController()
const atendimentosController = new AtendimentosController()
const loginController = new LoginController()
const empresaController = new EmpresaController()




const jwt = new Jwt()

route.get('/' , (req , res)=>{
    res.send({ok : 'Funcionando' , Name: 'Rubens'})
})

route.post('/usuarios' , jwt.decodificar, usuariosController.cadastroUsuario )
route.get('/usuarios' ,jwt.decodificar, usuariosController.index )

route.get('/atendimentos-index' , jwt.decodificar , atendimentosController.index)
route.get('/atendimentos' , jwt.decodificar , atendimentosController.indexIdUsuarioDataHoje)

route.post('/atendimentos'  , jwt.decodificar , atendimentosController.cadastrarAtendimentos)

/*

route.post('/atendimentos',

    celebrate({
    body: Joi.object().keys({
      id: Joi.number().required(),
    } )

}, {abortEarly:false}) ,


 jwt.decodificar ,
 atendimentosController.cadastrarAtendimentos)
*/

route.get ('/list-emprea' , jwt.decodificar , empresaController.index)

route.get('/login' , loginController.login )

export default route


