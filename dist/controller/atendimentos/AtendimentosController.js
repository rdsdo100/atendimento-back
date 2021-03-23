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
var Atendimentos_1 = require("../../entity/Atendimentos");
var AtendimentosBusiness_1 = __importDefault(require("../../business/atendimentos/AtendimentosBusiness"));
var Empresas_1 = require("../../entity/Empresas");
var Usuarios_1 = require("../../entity/Usuarios");
var Jwt_1 = require("../../config/Jwt");
var AtendimentosController = /** @class */ (function () {
    function AtendimentosController() {
        this.atendimentosBusiness = new AtendimentosBusiness_1.default;
        this.atendimentos = new Atendimentos_1.Atendimentos;
    }
    AtendimentosController.prototype.buscarAtendimentoUsuarios = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarioId, atendimentosBusiness, retornoBuscaAtendimento;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuarioId = Number(request.body.decoded.id);
                        atendimentosBusiness = new AtendimentosBusiness_1.default();
                        return [4 /*yield*/, atendimentosBusiness.buscarAtendimentosUsuarios(usuarioId)];
                    case 1:
                        retornoBuscaAtendimento = _a.sent();
                        return [2 /*return*/, response.status(200).json(retornoBuscaAtendimento)];
                }
            });
        });
    };
    AtendimentosController.prototype.buscaGraficosEmpresasAtendimentos = function (_, response) {
        return __awaiter(this, void 0, void 0, function () {
            var resultado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atendimentosBusiness.buscarAtendimentosEmpresas()];
                    case 1:
                        resultado = _a.sent();
                        return [2 /*return*/, response.status(200).json(resultado)];
                }
            });
        });
    };
    AtendimentosController.prototype.cadastrarAtendimentos = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var atendimento, empresa, usuario, atendimentosBusiness, atendimentoSalvo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        atendimento = new Atendimentos_1.Atendimentos();
                        empresa = new Empresas_1.Empresas();
                        usuario = new Usuarios_1.Usuarios();
                        atendimentosBusiness = new AtendimentosBusiness_1.default();
                        atendimento.descricaoAtendimento = String(request.body.descricaoAtendimento);
                        empresa.id = Number(request.body.codigoEmpresaId);
                        usuario.id = Number(request.body.decoded.id);
                        atendimento.dataAtendimento = new Date();
                        atendimento.usuariosIdFK = usuario;
                        atendimento.empresasIdFK = empresa;
                        return [4 /*yield*/, atendimentosBusiness.cadastrarAtendimentos(atendimento)];
                    case 1:
                        atendimentoSalvo = _a.sent();
                        return [2 /*return*/, response.status(200).json(atendimentoSalvo)];
                }
            });
        });
    };
    AtendimentosController.prototype.deletarAtendimento = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarioId, deletar, message, atendimentoBusiness;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuarioId = Number(request.body.decoded.id);
                        deletar = Number(request.params.id);
                        message = '';
                        atendimentoBusiness = new AtendimentosBusiness_1.default();
                        return [4 /*yield*/, atendimentoBusiness.deletarAtendimentos(deletar, usuarioId)];
                    case 1:
                        message = _a.sent();
                        response.json({ message: message });
                        return [2 /*return*/];
                }
            });
        });
    };
    AtendimentosController.prototype.updadeAtendimentos = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var atendimento, atendimentosBusiness, atendimentoUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        atendimento = new Atendimentos_1.Atendimentos();
                        atendimentosBusiness = new AtendimentosBusiness_1.default();
                        atendimento.id = Number(request.body.id);
                        atendimento.descricaoAtendimento = String(request.body.descricaoAtendimento);
                        return [4 /*yield*/, atendimentosBusiness.updateAtendimentos(atendimento)];
                    case 1:
                        atendimentoUpdate = _a.sent();
                        return [2 /*return*/, response.status(200).json(atendimentoUpdate)];
                }
            });
        });
    };
    __decorate([
        core_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AtendimentosController.prototype, "buscarAtendimentoUsuarios", null);
    __decorate([
        core_1.Get("graficos"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AtendimentosController.prototype, "buscaGraficosEmpresasAtendimentos", null);
    __decorate([
        core_1.Post(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AtendimentosController.prototype, "cadastrarAtendimentos", null);
    __decorate([
        core_1.Delete(":id"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AtendimentosController.prototype, "deletarAtendimento", null);
    __decorate([
        core_1.Put(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AtendimentosController.prototype, "updadeAtendimentos", null);
    AtendimentosController = __decorate([
        core_1.Controller('atendimento'),
        core_1.ClassMiddleware([Jwt_1.decodificar])
    ], AtendimentosController);
    return AtendimentosController;
}());
exports.default = AtendimentosController;
