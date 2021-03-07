import GurpoUsuarioController from '../controller/usuarios/GurpoUsuarioController';
import Inicio from '../controller/Inicio'
import UsuaruiosController from "../controller/usuarios/UsuaruiosController";
import LoginController from "../controller/usuarios/LoginController";
import AtendimentosController from "../controller/atendimentos/AtendimentosController";
import EmpresasController from '../controller/empresas/EmpresasController';


const inicio = new Inicio()
const usuario = new UsuaruiosController()
const login = new LoginController()
const atendimento = new AtendimentosController()
const empresa = new EmpresasController()
const gurpoUsuario = new GurpoUsuarioController()


export const routes = [
    inicio,
    usuario,
    login,
    gurpoUsuario,
    atendimento,
    empresa

]