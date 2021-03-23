"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var empresasRepository_1 = require("../../repository/empresasRepository");
var Empresas_1 = require("../../entity/Empresas");
var usuarioRepository_1 = require("../../repository/usuarioRepository");
var Usuarios_1 = require("../../entity/Usuarios");
var GrupoUsuarios_1 = require("../../entity/GrupoUsuarios");
var EmpresasBusiness = /** @class */ (function () {
    function EmpresasBusiness() {
    }
    EmpresasBusiness.prototype.cadastrarEmpresas = function (empresa) {
        return __awaiter(this, void 0, void 0, function () {
            var empresasSalvo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, empresasRepository_1.insertEmpresasRepository(empresa)];
                    case 1:
                        empresasSalvo = _a.sent();
                        return [2 /*return*/, empresasSalvo];
                }
            });
        });
    };
    EmpresasBusiness.prototype.listarEmpresas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var retornoListEmpresas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, empresasRepository_1.listEmpresasRepository()];
                    case 1:
                        retornoListEmpresas = _a.sent();
                        return [2 /*return*/, retornoListEmpresas];
                }
            });
        });
    };
    EmpresasBusiness.prototype.updateEmpresa = function (empresa) {
        return __awaiter(this, void 0, void 0, function () {
            var empresaUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, empresasRepository_1.updateEmpresaRpository(empresa)];
                    case 1:
                        empresaUpdate = _a.sent();
                        return [2 /*return*/, empresaUpdate];
                }
            });
        });
    };
    EmpresasBusiness.prototype.deletarAtendimentos = function (idEmpresa, idUsuario) {
        return __awaiter(this, void 0, void 0, function () {
            var empresaDelete, usuariosDelete, grupoUsuariosDelete, empresa, usuarios;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        empresaDelete = new Empresas_1.Empresas();
                        usuariosDelete = new Usuarios_1.Usuarios();
                        grupoUsuariosDelete = new GrupoUsuarios_1.GrupoUsuarios();
                        return [4 /*yield*/, empresasRepository_1.buscarEmpresaIdRepository(idEmpresa)];
                    case 1:
                        empresa = _a.sent();
                        return [4 /*yield*/, usuarioRepository_1.buscarUsuarioGrupoUsuarioId(idUsuario)];
                    case 2:
                        usuarios = _a.sent();
                        empresaDelete.id = empresa.id;
                        usuariosDelete.id = usuarios.id;
                        grupoUsuariosDelete.id = usuarios.grupoUsuariosIdFK.id;
                        usuariosDelete.grupoUsuariosIdFK = grupoUsuariosDelete;
                        if (!(grupoUsuariosDelete.id <= 2)) return [3 /*break*/, 6];
                        if (!(empresaDelete.id === idEmpresa)) return [3 /*break*/, 4];
                        return [4 /*yield*/, empresasRepository_1.deleteIdEmpresaRpository(idEmpresa)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, 'Empresa Deletada!'];
                    case 4: return [2 /*return*/, "Empresa " + idEmpresa + ", n\u00E3o deletada!"];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, "Não permitido!"];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return EmpresasBusiness;
}());
exports.default = EmpresasBusiness;
