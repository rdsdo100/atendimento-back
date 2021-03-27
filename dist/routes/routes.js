"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var GurpoUsuarioController_1 = __importDefault(require("../controller/usuarios/GurpoUsuarioController"));
var Inicio_1 = __importDefault(require("../controller/Inicio"));
var UsuaruiosController_1 = __importDefault(require("../controller/usuarios/UsuaruiosController"));
var LoginController_1 = __importDefault(require("../controller/usuarios/LoginController"));
var AtendimentosController_1 = __importDefault(require("../controller/atendimentos/AtendimentosController"));
var EmpresasController_1 = __importDefault(require("../controller/empresas/EmpresasController"));
var GrupoEmpresasController_1 = __importDefault(require("../controller/empresas/GrupoEmpresasController"));
var EquipeUsuarioController_1 = __importDefault(require("../controller/usuarios/EquipeUsuarioController"));
var inicio = new Inicio_1.default();
var usuario = new UsuaruiosController_1.default();
var login = new LoginController_1.default();
var atendimento = new AtendimentosController_1.default();
var gurpoUsuario = new GurpoUsuarioController_1.default();
var empresa = new EmpresasController_1.default();
var grupoEmpresa = new GrupoEmpresasController_1.default();
var equipeUsuarios = new EquipeUsuarioController_1.default();
exports.routes = [
    inicio,
    usuario,
    login,
    gurpoUsuario,
    atendimento,
    empresa,
    grupoEmpresa,
    equipeUsuarios
];
