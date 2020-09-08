import express from 'express'
import Jwt from "../config/Jwt";
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
const jwt = new Jwt()

route.get('/' , (req , res)=>{
    res.send({ok : 'Funcionando' , Name: 'Rubens'})
})

route.post('/usuarios' , jwt.decodificar, usuariosController.cadastroUsuario )
route.get('/usuarios' ,jwt.decodificar, usuariosController.index )
route.delete('/usuarios/:id' ,jwt.decodificar, usuariosController.deleteUsuario )

route.get('/atendimentos-index' , jwt.decodificar , atendimentosController.index)
route.get('/atendimentos' , jwt.decodificar , atendimentosController.indexIdUsuarioDataHoje)
route.delete('/atendimentos/:id' , jwt.decodificar , atendimentosController.deletarAtendimentos)
route.post('/atendimentos'  , jwt.decodificar , atendimentosController.cadastrarAtendimentos)

route.get('/desenvolvimento' , jwt.decodificar , reqDesenvolvimento.index )
route.post('/desenvolvimento' , jwt.decodificar , reqDesenvolvimento.cadastroRequisicao )

route.get ('/list-empresa' , jwt.decodificar , empresaController.index)
route.post('/cad-empresa' , jwt.decodificar , empresaController.cadastrEmoresa)

route.get('/login' , loginController.login )

route.get("/exemplos" ,jwt.decodificar  , exemplos.index )
route.get("/exemplos-Login" , exemplos.indexLoginExemplos )

export default route



/*route.post('/atendimentos',
    celebrate(atendimentoVerification , paramsVerification) ,
    jwt.decodificar ,
    atendimentosController.cadastrarAtendimentos)*/


