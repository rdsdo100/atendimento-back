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
exports.UsuarioEmpresa = void 0;
var typeorm_1 = require("typeorm");
var index_1 = require("typeorm/index");
var Empresas_1 = require("./Empresas");
var UsuarioEmpresa = /** @class */ (function () {
    function UsuarioEmpresa() {
    }
    __decorate([
        index_1.PrimaryGeneratedColumn({ type: "integer", name: "id" }),
        __metadata("design:type", Number)
    ], UsuarioEmpresa.prototype, "id", void 0);
    __decorate([
        index_1.Column(),
        __metadata("design:type", String)
    ], UsuarioEmpresa.prototype, "nome", void 0);
    __decorate([
        index_1.ManyToOne(function () { return Empresas_1.Empresas; }, function (empresa) { return empresa.usuarioEmpresa; }, { eager: true }),
        index_1.JoinColumn([{ name: "empresa_id_fk", referencedColumnName: "id" }]),
        __metadata("design:type", Empresas_1.Empresas)
    ], UsuarioEmpresa.prototype, "empresaIdFk", void 0);
    UsuarioEmpresa = __decorate([
        typeorm_1.Entity({ name: "usuario-empresa" })
    ], UsuarioEmpresa);
    return UsuarioEmpresa;
}());
exports.UsuarioEmpresa = UsuarioEmpresa;
