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
exports.Atendimentos = void 0;
var typeorm_1 = require("typeorm");
var Usuarios_1 = require("./Usuarios");
var Empresas_1 = require("./Empresas");
var Atendimentos = /** @class */ (function (_super) {
    __extends(Atendimentos, _super);
    function Atendimentos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Atendimentos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'descricao_atendimento', length: 50, nullable: false }),
        __metadata("design:type", String)
    ], Atendimentos.prototype, "descricaoAtendimento", void 0);
    __decorate([
        typeorm_1.Column({ name: "data_atendimento", nullable: false }),
        __metadata("design:type", Date)
    ], Atendimentos.prototype, "dataAtendimento", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.atendimentos; }),
        typeorm_1.JoinColumn([{ name: 'usuarios_id_fk', referencedColumnName: 'id' }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], Atendimentos.prototype, "usuariosIdFK", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Empresas_1.Empresas; }, function (empresas) { return empresas.atendimentos; }),
        typeorm_1.JoinColumn([{ name: 'empresas_id_fk', referencedColumnName: 'id' }]),
        __metadata("design:type", Empresas_1.Empresas)
    ], Atendimentos.prototype, "empresasIdFK", void 0);
    Atendimentos = __decorate([
        typeorm_1.Entity()
    ], Atendimentos);
    return Atendimentos;
}(typeorm_1.BaseEntity));
exports.Atendimentos = Atendimentos;
