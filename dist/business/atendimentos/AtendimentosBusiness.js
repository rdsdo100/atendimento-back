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
var atendimentosRepository_1 = require("../../repository/atendimentosRepository");
var AtendimentosBusiness = /** @class */ (function () {
    function AtendimentosBusiness() {
    }
    AtendimentosBusiness.prototype.cadastrarAtendimentos = function (atendimento) {
        return __awaiter(this, void 0, void 0, function () {
            var atendimentoSalvo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, atendimentosRepository_1.insertAtendimentoRepository(atendimento)];
                    case 1:
                        atendimentoSalvo = _a.sent();
                        return [2 /*return*/, atendimentoSalvo];
                }
            });
        });
    };
    AtendimentosBusiness.prototype.updateAtendimentos = function (atendimento) {
        return __awaiter(this, void 0, void 0, function () {
            var atendimentoUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, atendimentosRepository_1.updateAtendimentosRepository(atendimento)];
                    case 1:
                        atendimentoUpdate = _a.sent();
                        return [2 /*return*/, atendimentoUpdate];
                }
            });
        });
    };
    AtendimentosBusiness.prototype.buscarAtendimentosUsuarios = function (idUsuario) {
        return __awaiter(this, void 0, void 0, function () {
            var retornoListAtendimentos, retornoAtendimentoFormatado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, atendimentosRepository_1.buscarAtendimentoUsuarioRepository(idUsuario)];
                    case 1:
                        retornoListAtendimentos = _a.sent();
                        retornoAtendimentoFormatado = retornoListAtendimentos.map(function (atendimento) {
                            return {
                                id: atendimento.id,
                                descricaoAtendimento: atendimento.descricaoAtendimento,
                                dataAtendimento: atendimento.dataAtendimento,
                                idEmpresa: atendimento.empresasIdFK.id,
                                cogigoEmpresa: atendimento.empresasIdFK.codigoEmpresa,
                                nomeEmpresa: atendimento.empresasIdFK.nomeEmpresa
                            };
                        });
                        return [2 /*return*/, retornoAtendimentoFormatado];
                }
            });
        });
    };
    AtendimentosBusiness.prototype.deletarAtendimentos = function (idAtendimento, idUsuario) {
        return __awaiter(this, void 0, void 0, function () {
            var atendimento, dataHoje, dataAtendimento, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, atendimentosRepository_1.buscarAtendimentoIdRepository(idAtendimento)];
                    case 1:
                        atendimento = _a.sent();
                        dataHoje = new Date;
                        dataAtendimento = atendimento.dataAtendimento;
                        message = '';
                        if ((Number(dataHoje.getDate()) == Number(dataAtendimento.getDate())) &&
                            (Number(dataHoje.getMonth()) == Number(dataAtendimento.getMonth())) &&
                            (Number(dataHoje.getFullYear()) == Number(dataAtendimento.getFullYear()))) {
                            if ((idAtendimento === Number(atendimento.id) &&
                                (idUsuario === Number(atendimento.usuariosIdFK.id)))) {
                                console.log(atendimento);
                                atendimentosRepository_1.deleteIdAtendimentoRepository(idAtendimento);
                                return [2 /*return*/, message = 'Atendimento Deletado!'];
                            }
                            else {
                                return [2 /*return*/, message = 'Atendimento Não deletado, Usuario Incompativél!'];
                            }
                        }
                        else {
                            return [2 /*return*/, message = 'Atendimento Não deletado, Data Incompativél!'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AtendimentosBusiness.prototype.buscarAtendimentosEmpresas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var retorno, retornoFormatado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, atendimentosRepository_1.buscaEmpresaAtendimentos()];
                    case 1:
                        retorno = _a.sent();
                        retornoFormatado = retorno.map(function (item) {
                            return {
                                codigoEmpresa: item.codigo_empresa,
                                count: Number(item.count)
                            };
                        });
                        return [2 /*return*/, retornoFormatado];
                }
            });
        });
    };
    return AtendimentosBusiness;
}());
exports.default = AtendimentosBusiness;
