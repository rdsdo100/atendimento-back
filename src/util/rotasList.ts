import LoginController from "../controller/LoginController";
import ExemplosJson from "../controller/ExemplosJson";
import AtendimentosController from "../controller/AtendimentosController";
import Inicio from "../controller/Inicio";
import EmpresaController from "../controller/EmpresaController";
import RequisicaoDesenvolvimentoController from "../controller/RequisicaoDesenvolvimentoController";
import UsuariosController from "../controller/UsuariosController";


const atendimentos = new AtendimentosController()
const empresa = new EmpresaController()
const exemplos = new ExemplosJson()
const inicio = new Inicio()
const login = new LoginController()
const requisicaoDesenvolvimentoController = new RequisicaoDesenvolvimentoController()
const usuarios = new UsuariosController()

export const rotas = [
    login,
    inicio,
    exemplos
]