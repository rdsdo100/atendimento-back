import Exemplos from '../controller/Exemplos'
import Inicio from '../controller/Inicio'
import UsuaruiosController from "../controller/UsuaruiosController";

const inicio = new Inicio()
const exemplos = new Exemplos()
const usuario = new UsuaruiosController()


export const routes = [
    inicio, 
    exemplos,
    usuario

]