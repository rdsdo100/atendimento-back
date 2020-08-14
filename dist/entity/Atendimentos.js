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
exports.Atendimentos = void 0;
var typeorm_1 = require("typeorm");
var Usuarios_1 = require("./Usuarios");
var Empresas_1 = require("./Empresas");
var Atendimentos = /** @class */ (function () {
    function Atendimentos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id" }),
        __metadata("design:type", Number)
    ], Atendimentos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "descricao_atendimento" }),
        __metadata("design:type", String)
    ], Atendimentos.prototype, "descricaoAtendimento", void 0);
    __decorate([
        typeorm_1.Column({ name: "data_cadastro" }),
        __metadata("design:type", Date)
    ], Atendimentos.prototype, "dataCadastro", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.atendimentos; }, { eager: true }),
        typeorm_1.JoinColumn([{ name: "usuarios_id_fk", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], Atendimentos.prototype, "usuariosIdFk", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Empresas_1.Empresas; }, function (empresas) { return empresas.atendimentos; }, { eager: true }),
        typeorm_1.JoinColumn([{ name: "empresas_id_fk", referencedColumnName: "id" }]),
        __metadata("design:type", Empresas_1.Empresas)
    ], Atendimentos.prototype, "empresasIdFk", void 0);
    Atendimentos = __decorate([
        typeorm_1.Entity()
    ], Atendimentos);
    return Atendimentos;
}());
exports.Atendimentos = Atendimentos;
