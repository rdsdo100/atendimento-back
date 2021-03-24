import GurpoUsuarioController from '../controller/usuarios/GurpoUsuarioController';
import Inicio from '../controller/Inicio'
import UsuaruiosController from "../controller/usuarios/UsuaruiosController";
import LoginController from "../controller/usuarios/LoginController";
import AtendimentosController from "../controller/atendimentos/AtendimentosController";
import EmpresasController from '../controller/empresas/EmpresasController';
import GrupoEmpresasController from '../controller/empresas/GrupoEmpresasController';
import EquipeUsuarioController from '../controller/usuarios/EquipeUsuarioController';



const inicio = new Inicio()
const usuario = new UsuaruiosController()
const login = new LoginController()
const atendimento = new AtendimentosController()
const gurpoUsuario = new GurpoUsuarioController()
const empresa = new EmpresasController()
const grupoEmpresa = new GrupoEmpresasController()
const equipeUsuarios = new EquipeUsuarioController()

export const routes = [
    inicio,
    usuario,
    login,
    gurpoUsuario,
    atendimento,
    empresa,
    grupoEmpresa,
    equipeUsuarios   

]