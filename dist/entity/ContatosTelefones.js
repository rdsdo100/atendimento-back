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
exports.ContatosTelefones = void 0;
var typeorm_1 = require("typeorm");
var PessoasTelefones_1 = require("./PessoasTelefones");
var ContatosTelefones = /** @class */ (function () {
    function ContatosTelefones() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ContatosTelefones.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'dd', type: 'varchar', length: '3', nullable: false, }),
        __metadata("design:type", String)
    ], ContatosTelefones.prototype, "dd", void 0);
    __decorate([
        typeorm_1.Column({ name: 'telefone', type: 'varchar', length: '12', nullable: false, }),
        __metadata("design:type", String)
    ], ContatosTelefones.prototype, "telefone", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return PessoasTelefones_1.PessoasTelefones; }, function (pessoasTelefones) { return pessoasTelefones.contatosTelefonesIdFK; }),
        __metadata("design:type", Array)
    ], ContatosTelefones.prototype, "pessoasTelefones", void 0);
    ContatosTelefones = __decorate([
        typeorm_1.Entity({ name: "contatos_telefones" })
    ], ContatosTelefones);
    return ContatosTelefones;
}());
exports.ContatosTelefones = ContatosTelefones;
