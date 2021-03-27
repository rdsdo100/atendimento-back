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
exports.TipoEquipe = void 0;
var typeorm_1 = require("typeorm");
var Usuarios_1 = require("./Usuarios");
var TipoEquipe = /** @class */ (function () {
    function TipoEquipe() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], TipoEquipe.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "nome_equipe", type: "varchar", length: "50", nullable: false, unique: true }),
        __metadata("design:type", String)
    ], TipoEquipe.prototype, "nomeEquipe", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.tipoEquipeIdFK; }),
        __metadata("design:type", Array)
    ], TipoEquipe.prototype, "usuarios", void 0);
    TipoEquipe = __decorate([
        typeorm_1.Entity({ name: "tipo_equipe" })
    ], TipoEquipe);
    return TipoEquipe;
}());
exports.TipoEquipe = TipoEquipe;
