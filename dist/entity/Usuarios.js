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
exports.Usuarios = void 0;
var typeorm_1 = require("typeorm");
var Atendimentos_1 = require("./Atendimentos");
var index_1 = require("typeorm/index");
var TipoUsuario_1 = require("./TipoUsuario");
var Usuarios = /** @class */ (function () {
    function Usuarios() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id" }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ unique: true, name: "nome_usuario" }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "nomeUsuario", void 0);
    __decorate([
        typeorm_1.Column({ unique: true, name: "matricula_usuario", nullable: true }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "matriculaUsuario", void 0);
    __decorate([
        typeorm_1.Column({ unique: true }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Usuarios.prototype, "senha", void 0);
    __decorate([
        typeorm_1.Column({ name: "bloqueio_usuario", type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Usuarios.prototype, "bloqueioUsuario", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Atendimentos_1.Atendimentos; }, function (atendimentos) { return atendimentos.usuariosIdFk; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "atendimentos", void 0);
    __decorate([
        index_1.ManyToOne(function () { return TipoUsuario_1.TipoUsuario; }, function (tipoUsuarios) { return tipoUsuarios.tipoUsuario; }, { eager: true }),
        index_1.JoinColumn([{ name: "tipo_usuarios_id_fk", referencedColumnName: "id" }]),
        __metadata("design:type", TipoUsuario_1.TipoUsuario)
    ], Usuarios.prototype, "tipoUsuarioIdFk", void 0);
    Usuarios = __decorate([
        typeorm_1.Entity()
    ], Usuarios);
    return Usuarios;
}());
exports.Usuarios = Usuarios;
/*
 {

         "nomeUsuario":"Dirgo",
        "senha": "123456",
        "email" :"rdsda2011@gmail.com",
        "matrcula" :"2",
        "tipoUsuaruio" : 1

}
* */ 
