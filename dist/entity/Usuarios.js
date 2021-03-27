"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Usuarios = void 0;
var typeorm_1 = require("typeorm");
var GrupoUsuarios_1 = require("./GrupoUsuarios");
var Atendimentos_1 = require("./Atendimentos");
var TipoEquipe_1 = require("./TipoEquipe");
var Usuarios = /** @class */ (function (_super) {
    __extends(Usuarios, _super);
    function Usuarios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'nome_usuario', length: 50 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "nomeUsuario", void 0);
    __decorate([
        typeorm_1.Column({ length: 90, unique: true }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ length: 30 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "senha", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Usuarios.prototype, "ativo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Usuarios.prototype, "bloqueado", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return GrupoUsuarios_1.GrupoUsuarios; }, function (grupoUsuarios) { return grupoUsuarios.usuarios; }),
        typeorm_1.JoinColumn([{ name: 'grupo_usuarios_id_fk', referencedColumnName: 'id' }]),
        __metadata("design:type", GrupoUsuarios_1.GrupoUsuarios)
    ], Usuarios.prototype, "grupoUsuariosIdFK", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return TipoEquipe_1.TipoEquipe; }, function (tipoEquipe) { return tipoEquipe.usuarios; }),
        typeorm_1.JoinColumn([{ name: 'tipo_equipe_id_fk', referencedColumnName: 'id' }]),
        __metadata("design:type", TipoEquipe_1.TipoEquipe)
    ], Usuarios.prototype, "tipoEquipeIdFK", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Atendimentos_1.Atendimentos; }, function (atendimentos) { return atendimentos.usuariosIdFK; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "atendimentos", void 0);
    Usuarios = __decorate([
        typeorm_1.Entity()
    ], Usuarios);
    return Usuarios;
}(typeorm_1.BaseEntity));
exports.Usuarios = Usuarios;
