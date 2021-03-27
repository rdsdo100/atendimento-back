"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@overnightjs/core");
var Usuarios_1 = require("../../entity/Usuarios");
var GrupoUsuarios_1 = require("../../entity/GrupoUsuarios");
var UsuariosBusiness_1 = __importDefault(require("../../business/usuarios/UsuariosBusiness"));
var Jwt_1 = require("../../config/Jwt");
var TipoEquipe_1 = require("../../entity/TipoEquipe");
var UsuaruiosController = /** @class */ (function () {
    function UsuaruiosController() {
    }
    UsuaruiosController.prototype.listUsuarios = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var auth, usuariosBusiness, retorno;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auth = request.body.decoded;
                        usuariosBusiness = new UsuariosBusiness_1.default();
                        return [4 /*yield*/, usuariosBusiness.buscarUsuariosall(Number(auth.grupoUsuario))];
                    case 1:
                        retorno = _a.sent();
                        response.json(retorno);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuaruiosController.prototype.cadastroUsuarios = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarios, grupoUsuaruios, usuariosBusiness, tipoEquipe, retornoUsuario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuarios = new Usuarios_1.Usuarios();
                        grupoUsuaruios = new GrupoUsuarios_1.GrupoUsuarios();
                        usuariosBusiness = new UsuariosBusiness_1.default();
                        tipoEquipe = new TipoEquipe_1.TipoEquipe();
                        usuarios.nomeUsuario = String(request.body.nome);
                        usuarios.email = String(request.body.email);
                        usuarios.senha = String(request.body.senha);
                        grupoUsuaruios.id = Number(request.body.grupoUsuario);
                        tipoEquipe.id = Number(request.body.equipeUsuario);
                        usuarios.grupoUsuariosIdFK = grupoUsuaruios;
                        usuarios.tipoEquipeIdFK = tipoEquipe;
                        return [4 /*yield*/, usuariosBusiness.cadastroUsuariosBuisiness(usuarios)];
                    case 1:
                        retornoUsuario = _a.sent();
                        return [2 /*return*/, response.status(200).json(retornoUsuario)];
                }
            });
        });
    };
    UsuaruiosController.prototype.updateUsuarios = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarios, tipoEquipe, grupoUsuaruios, usuariosBusiness, resposta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuarios = new Usuarios_1.Usuarios();
                        tipoEquipe = new TipoEquipe_1.TipoEquipe();
                        grupoUsuaruios = new GrupoUsuarios_1.GrupoUsuarios();
                        usuariosBusiness = new UsuariosBusiness_1.default();
                        usuarios.id = Number(request.body.id);
                        usuarios.nomeUsuario = String(request.body.nome);
                        usuarios.email = String(request.body.email);
                        usuarios.senha = String(request.body.senha);
                        grupoUsuaruios.id = Number(request.body.grupoUsuario);
                        tipoEquipe.id = Number(request.body.tipoEquipe);
                        usuarios.grupoUsuariosIdFK = grupoUsuaruios;
                        usuarios.tipoEquipeIdFK = tipoEquipe;
                        return [4 /*yield*/, usuariosBusiness.updateUsuario(usuarios)];
                    case 1:
                        resposta = _a.sent();
                        response.json(resposta);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuaruiosController.prototype.deletarUsuario = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var deletar, usuarioDecoded, usuariosBusiness, resposta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deletar = Number(request.params.id);
                        usuarioDecoded = Number(request.params.id);
                        usuariosBusiness = new UsuariosBusiness_1.default();
                        return [4 /*yield*/, usuariosBusiness.deletarUsuario(deletar, usuarioDecoded)];
                    case 1:
                        resposta = _a.sent();
                        response.json(resposta);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UsuaruiosController.prototype, "listUsuarios", null);
    __decorate([
        core_1.Post(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UsuaruiosController.prototype, "cadastroUsuarios", null);
    __decorate([
        core_1.Put(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UsuaruiosController.prototype, "updateUsuarios", null);
    __decorate([
        core_1.Delete(':id'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UsuaruiosController.prototype, "deletarUsuario", null);
    UsuaruiosController = __decorate([
        core_1.Controller('user'),
        core_1.ClassMiddleware([Jwt_1.decodificar])
    ], UsuaruiosController);
    return UsuaruiosController;
}());
exports.default = UsuaruiosController;
