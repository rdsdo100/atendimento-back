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
var typeorm_1 = require("typeorm");
var Atendimentos_1 = require("../entity/Atendimentos");
var AtendimentosRepository = /** @class */ (function () {
    function AtendimentosRepository() {
    }
    AtendimentosRepository.prototype.buscarAtendimentoUsuarioRepository = function (idUsuario) {
        return __awaiter(this, void 0, void 0, function () {
            var retornoAtendimento, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Atendimentos")
                                .leftJoinAndSelect('Atendimentos.empresasIdFK', 'empresaId')
                                .leftJoin('Atendimentos.usuariosIdFK', 'usuarioId')
                                .where('usuarioId.id = :id and Atendimentos.dataAtendimento = :data', { id: idUsuario, data: new Date() })
                                .getMany()];
                    case 1:
                        retornoAtendimento = _a.sent();
                        return [2 /*return*/, retornoAtendimento];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    AtendimentosRepository.prototype.buscarAtendimentoIdRepository = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var retornoAtendimento;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.createQueryBuilder("Atendimentos")
                            .leftJoin('Atendimentos.empresasIdFK', 'empresaId')
                            .leftJoinAndSelect('Atendimentos.usuariosIdFK', 'usuarioId')
                            .where('Atendimentos.id = :id', { id: id })
                            .getOne()];
                    case 1:
                        retornoAtendimento = _a.sent();
                        delete retornoAtendimento.usuariosIdFK.senha;
                        return [2 /*return*/, retornoAtendimento];
                }
            });
        });
    };
    ;
    AtendimentosRepository.prototype.insertAtendimentoRepository = function (atendimento) {
        return __awaiter(this, void 0, void 0, function () {
            var insertAtendimento, atendimentosalvo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        insertAtendimento = typeorm_1.getManager();
                        return [4 /*yield*/, insertAtendimento.save(Atendimentos_1.Atendimentos, atendimento)];
                    case 1:
                        atendimentosalvo = _a.sent();
                        return [2 /*return*/, atendimentosalvo];
                }
            });
        });
    };
    AtendimentosRepository.prototype.updateAtendimentosRepository = function (atendimento) {
        return __awaiter(this, void 0, void 0, function () {
            var atendimentoRepositoy, updateAtendimento;
            return __generator(this, function (_a) {
                atendimentoRepositoy = typeorm_1.getManager();
                updateAtendimento = atendimentoRepositoy.update(Atendimentos_1.Atendimentos, atendimento.id, atendimento);
                return [2 /*return*/, updateAtendimento];
            });
        });
    };
    ;
    AtendimentosRepository.prototype.deleteIdAtendimentoRepository = function (idAtendimento) {
        return __awaiter(this, void 0, void 0, function () {
            var atendimentoRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        atendimentoRepository = typeorm_1.getManager();
                        return [4 /*yield*/, atendimentoRepository.delete(Atendimentos_1.Atendimentos, { id: idAtendimento })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    AtendimentosRepository.prototype.buscaEmpresaAtendimentos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var atendimentoRepository, retornoAtendimento, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        atendimentoRepository = typeorm_1.getManager();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, atendimentoRepository.query("\n    select e.codigo_empresa, count(e.codigo_empresa)  from  atendimentos as a\n    left join empresas e on e.id = a.empresas_id_fk \n    group by e.codigo_empresa ;")];
                    case 2:
                        // retornoAtendimento = await createQueryBuilder("Atendimentos" )
                        // .leftJoinAndSelect('Atendimentos.empresasIdFK' , 'empresaId')
                        // .groupBy('Atendimentos.empresasIdFK')
                        // .getMany()
                        retornoAtendimento = _a.sent();
                        return [2 /*return*/, retornoAtendimento];
                    case 3:
                        e_2 = _a.sent();
                        return [2 /*return*/, e_2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AtendimentosRepository;
}());
exports.default = AtendimentosRepository;
