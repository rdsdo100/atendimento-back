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
exports.GrupoEmpresas = void 0;
var typeorm_1 = require("typeorm");
var Empresas_1 = require("./Empresas");
var GrupoEmpresas = /** @class */ (function () {
    function GrupoEmpresas() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], GrupoEmpresas.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'grupo_empresa', type: 'varchar', length: '50', nullable: false }),
        __metadata("design:type", String)
    ], GrupoEmpresas.prototype, "grupoEmpresa", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Empresas_1.Empresas; }, function (empresas) { return empresas.grupoEmpresaIdFK; }),
        __metadata("design:type", Array)
    ], GrupoEmpresas.prototype, "empresas", void 0);
    GrupoEmpresas = __decorate([
        typeorm_1.Entity("grupo_empresas")
    ], GrupoEmpresas);
    return GrupoEmpresas;
}());
exports.GrupoEmpresas = GrupoEmpresas;
