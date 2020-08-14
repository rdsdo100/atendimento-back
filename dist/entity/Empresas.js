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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresas = void 0;
var typeorm_1 = require("typeorm");
var Atendimentos_1 = require("./Atendimentos");
var UsuarioEmpresa_1 = require("./UsuarioEmpresa");
var Empresas = /** @class */ (function () {
    function Empresas() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id" }),
        __metadata("design:type", Number)
    ], Empresas.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ unique: true, name: "cod_empresa" }),
        __metadata("design:type", String)
    ], Empresas.prototype, "codEmpresa", void 0);
    __decorate([
        typeorm_1.Column({ name: "razao_empresa" }),
        __metadata("design:type", String)
    ], Empresas.prototype, "razaoEmpresa", void 0);
    __decorate([
        typeorm_1.Column({ name: "fantasia-empresa" }),
        __metadata("design:type", String)
    ], Empresas.prototype, "fantasiaEmpresa", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Atendimentos_1.Atendimentos; }, function (atendimentos) { return atendimentos.empresasIdFk; }),
        __metadata("design:type", Array)
    ], Empresas.prototype, "atendimentos", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return UsuarioEmpresa_1.UsuarioEmpresa; }, function (usuarioEmpresa) { return usuarioEmpresa.empresaIdFk; }),
        __metadata("design:type", Array)
    ], Empresas.prototype, "usuarioEmpresa", void 0);
    Empresas = __decorate([
        typeorm_1.Entity()
    ], Empresas);
    return Empresas;
}());
exports.Empresas = Empresas;
