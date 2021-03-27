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
exports.PessoasTelefones = void 0;
var typeorm_1 = require("typeorm");
var ContatosPessoas_1 = require("./ContatosPessoas");
var ContatosTelefones_1 = require("./ContatosTelefones");
var PessoasTelefones = /** @class */ (function () {
    function PessoasTelefones() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], PessoasTelefones.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return ContatosPessoas_1.ContatosPessoas; }, function (contatosPessoas) { return contatosPessoas.pessoasTelefones; }),
        typeorm_1.JoinColumn([{ name: 'empresas_id_fk', referencedColumnName: 'id' }]),
        __metadata("design:type", ContatosPessoas_1.ContatosPessoas)
    ], PessoasTelefones.prototype, "contatosPessoasIdFK", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return ContatosTelefones_1.ContatosTelefones; }, function (contatosTelefones) { return contatosTelefones.pessoasTelefones; }),
        typeorm_1.JoinColumn([{ name: 'empresas_id_fk', referencedColumnName: 'id' }]),
        __metadata("design:type", ContatosTelefones_1.ContatosTelefones)
    ], PessoasTelefones.prototype, "contatosTelefonesIdFK", void 0);
    PessoasTelefones = __decorate([
        typeorm_1.Entity({ name: "pessoas_telefones" })
    ], PessoasTelefones);
    return PessoasTelefones;
}());
exports.PessoasTelefones = PessoasTelefones;
