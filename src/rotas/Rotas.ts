import express from 'express'
import Jwt from "../config/Jwt";
import UsuariosController from "../controller/UsuariosController";
import LoginController from "../controller/LoginController";
import AtendimentosController from "../controller/AtendimentosController";
import EmpresaController from "../controller/EmpresaController";
import RequisicaoDesenvolvimentoController from "../controller/RequisicaoDesenvolvimentoController";


const route = express.Router()
const usuariosController = new UsuariosController()
const atendimentosController = new AtendimentosController()
const loginController = new LoginController()
const empresaController = new EmpresaController()
const reqDesenvolvimento = new RequisicaoDesenvolvimentoController()
const jwt = new Jwt()

route.get('/' , (req , res)=>{
    res.send({ok : 'Funcionando' , Name: 'Rubens'})
})


route.post('/usuarios' , jwt.decodificar, usuariosController.cadastroUsuario )
route.get('/usuarios' ,jwt.decodificar, usuariosController.index )

route.get('/atendimentos-index' , jwt.decodificar , atendimentosController.index)
route.get('/atendimentos' , jwt.decodificar , atendimentosController.indexIdUsuarioDataHoje)
route.delete('/atendimentos/:id' , jwt.decodificar , atendimentosController.deletarAtendimentos)
route.post('/atendimentos'  , jwt.decodificar , atendimentosController.cadastrarAtendimentos)


/*route.post('/atendimentos',
    celebrate(atendimentoVerification , paramsVerification) ,
    jwt.decodificar ,
    atendimentosController.cadastrarAtendimentos)*/

route.get('/desenvolvimento' , jwt.decodificar , reqDesenvolvimento.index )
route.post('/desenvolvimento' , jwt.decodificar , reqDesenvolvimento.cadastroRequisicao )

route.get ('/list-emprea' , jwt.decodificar , empresaController.index)

route.get('/login' , loginController.login )

export default route


