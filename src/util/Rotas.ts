import AtendimentosController from "@src/controller/AtendimentosController";
import LoginController from "@src/controller/LoginController";
import ExemplosJson from "@src/controller/ExemplosJson";
import EmpresaController from "@src/controller/EmpresaController";
import RequisicaoDesenvolvimentoController from "@src/controller/RequisicaoDesenvolvimentoController";
import UsuariosController from "@src/controller/UsuariosController";

const atendimentosController = new AtendimentosController();
const login = new LoginController()
const exemplos = new ExemplosJson()
const empresaController = new EmpresaController()
const requisicaoDesenvolvimentoController = new RequisicaoDesenvolvimentoController()
const usuariosController = new UsuariosController()

export const rotas = [
    atendimentosController,
    login,
    exemplos,
    empresaController,
    requisicaoDesenvolvimentoController,
    usuariosController
]