"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Jwt_1 = __importDefault(require("../config/Jwt"));
var CadastroUsuario_1 = __importDefault(require("../controller/CadastroUsuario"));
var Login_1 = __importDefault(require("../controller/Login"));
var route = express_1.default.Router();
var cadastroUsuarios = new CadastroUsuario_1.default();
var login = new Login_1.default();
var jwt = new Jwt_1.default();
route.get('/', function (req, res) {
    res.send({ ok: 'Funcionando', Name: 'Rubens' });
});
route.post('/usuarios', jwt.decodificar, cadastroUsuarios.cadastroUsuario);
route.get('/usuarios', jwt.decodificar, cadastroUsuarios.index);
route.get('/login', login.login);
exports.default = route;
