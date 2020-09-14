/*

import express from 'express'
import {decodificar} from "../config/Jwt";
import UsuariosController from "../controller/UsuariosController";
import LoginController from "../controller/LoginController";
import AtendimentosController from "../controller/AtendimentosController";
import EmpresaController from "../controller/EmpresaController";
import RequisicaoDesenvolvimentoController from "../controller/RequisicaoDesenvolvimentoController";
import ExemplosJson from "../controller/ExemplosJson";

const route = express.Router()
const usuariosController = new UsuariosController()
const atendimentosController = new AtendimentosController()
const loginController = new LoginController()
const empresaController = new EmpresaController()
const reqDesenvolvimento = new RequisicaoDesenvolvimentoController()
const exemplos = new ExemplosJson()

route.get('/' , (req , res)=>{
    res.send({ok : 'Funcionando' , Name: 'Rubens'})
})

route.post('/usuarios' , decodificar, usuariosController.cadastroUsuario )
route.get('/usuarios' ,decodificar, usuariosController.index )
route.delete('/usuarios/:id' ,decodificar, usuariosController.deleteUsuario )

route.get('/atendimentos-index' , decodificar , atendimentosController.index)
route.get('/atendimentos' , decodificar , atendimentosController.indexIdUsuarioDataHoje)
route.delete('/atendimentos/:id' , decodificar , atendimentosController.deletarAtendimentos)
route.post('/atendimentos'  , decodificar , atendimentosController.cadastrarAtendimentos)

route.get('/desenvolvimento' , decodificar , reqDesenvolvimento.index )
route.post('/desenvolvimento' , decodificar , reqDesenvolvimento.cadastroRequisicao )

route.get ('/list-empresa' , decodificar , empresaController.index)
route.post('/cad-empresa' , decodificar , empresaController.cadastroEmoresa)

route.get('/login' , loginController.login )

route.get("/exemplos" ,decodificar  , exemplos.index )
route.get("/exemplos-Login" , exemplos.indexLoginExemplos )

export default route

*/

/*route.post('/atendimentos',
    celebrate(atendimentoVerification , paramsVerification) ,
    decodificar ,
    atendimentosController.cadastrarAtendimentos)*/


