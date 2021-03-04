import GurpoUsuarioController from '../controller/usuarios/GurpoUsuarioController';
import Inicio from '../controller/Inicio'
import UsuaruiosController from "../controller/usuarios/UsuaruiosController";
import LoginController from "../controller/usuarios/LoginController";
import AtendimentosController from "../controller/atendimentos/AtendimentosController";


const inicio = new Inicio()
const usuario = new UsuaruiosController()
const grupoUsusarios = new GurpoUsuarioController()
const login = new LoginController()
const atendimento = new AtendimentosController()


export const routes = [
    inicio,
    usuario,
    login,
    grupoUsusarios,
    atendimento

]