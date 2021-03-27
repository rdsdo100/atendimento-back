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
exports.Empresas = void 0;
var typeorm_1 = require("typeorm");
var Atendimentos_1 = require("./Atendimentos");
var GrupoEmpresas_1 = require("./GrupoEmpresas");
var Empresas = /** @class */ (function (_super) {
    __extends(Empresas, _super);
    function Empresas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Empresas.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'codigo_empresa', length: 10, unique: true }),
        __metadata("design:type", String)
    ], Empresas.prototype, "codigoEmpresa", void 0);
    __decorate([
        typeorm_1.Column({ name: 'nome_empresa', length: 250, type: 'varchar', nullable: false, }),
        __metadata("design:type", String)
    ], Empresas.prototype, "nomeEmpresa", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Atendimentos_1.Atendimentos; }, function (atendimentos) { return atendimentos.usuariosIdFK; }),
        __metadata("design:type", Array)
    ], Empresas.prototype, "atendimentos", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return GrupoEmpresas_1.GrupoEmpresas; }, function (grupoEmpreasas) { return grupoEmpreasas.empresas; }),
        typeorm_1.JoinColumn([{ name: 'grupo_empresas_id_fk', referencedColumnName: 'id' }]),
        __metadata("design:type", GrupoEmpresas_1.GrupoEmpresas)
    ], Empresas.prototype, "grupoEmpresaIdFK", void 0);
    Empresas = __decorate([
        typeorm_1.Entity()
    ], Empresas);
    return Empresas;
}(typeorm_1.BaseEntity));
exports.Empresas = Empresas;
