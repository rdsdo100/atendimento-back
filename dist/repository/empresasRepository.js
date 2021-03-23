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
exports.deleteIdEmpresaRpository = exports.buscarEmpresaIdRepository = exports.insertEmpresasRepository = exports.updateEmpresaRpository = exports.listEmpresasRepository = void 0;
var typeorm_1 = require("typeorm");
var Empresas_1 = require("../entity/Empresas");
var updateEmpresaRpository = function (empresa) { return __awaiter(void 0, void 0, void 0, function () {
    var empresaRepository, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                empresaRepository = typeorm_1.getManager();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, empresaRepository.update(Empresas_1.Empresas, empresa.id, empresa)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_1 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateEmpresaRpository = updateEmpresaRpository;
var deleteIdEmpresaRpository = function (idEmpresa) { return __awaiter(void 0, void 0, void 0, function () {
    var empresaRepository, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                empresaRepository = typeorm_1.getManager();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, empresaRepository.delete(Empresas_1.Empresas, idEmpresa)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_2 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteIdEmpresaRpository = deleteIdEmpresaRpository;
var listEmpresasRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var usuarioRepository;
    return __generator(this, function (_a) {
        usuarioRepository = typeorm_1.getManager();
        return [2 /*return*/, usuarioRepository.find(Empresas_1.Empresas)];
    });
}); };
exports.listEmpresasRepository = listEmpresasRepository;
var insertEmpresasRepository = function (empresa) { return __awaiter(void 0, void 0, void 0, function () {
    var insertEmpresa, empresaSalvo, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                insertEmpresa = typeorm_1.getManager();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, insertEmpresa.save(Empresas_1.Empresas, empresa)];
            case 2:
                empresaSalvo = _a.sent();
                return [2 /*return*/, empresaSalvo];
            case 3:
                e_3 = _a.sent();
                return [2 /*return*/, e_3];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.insertEmpresasRepository = insertEmpresasRepository;
var buscarEmpresaIdRepository = function (idEmpresa) { return __awaiter(void 0, void 0, void 0, function () {
    var empresaRepository;
    return __generator(this, function (_a) {
        empresaRepository = typeorm_1.getManager();
        try {
            return [2 /*return*/, empresaRepository.findOne(Empresas_1.Empresas, { id: idEmpresa })];
        }
        catch (e) {
            return [2 /*return*/, e];
        }
        return [2 /*return*/];
    });
}); };
exports.buscarEmpresaIdRepository = buscarEmpresaIdRepository;
