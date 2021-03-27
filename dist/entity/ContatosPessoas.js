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
exports.ContatosPessoas = void 0;
var typeorm_1 = require("typeorm");
var PessoasTelefones_1 = require("./PessoasTelefones");
var ContatosPessoas = /** @class */ (function () {
    function ContatosPessoas() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ContatosPessoas.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'nome', type: 'varchar', length: '500', nullable: false }),
        __metadata("design:type", String)
    ], ContatosPessoas.prototype, "nome", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return PessoasTelefones_1.PessoasTelefones; }, function (pessoasTelefones) { return pessoasTelefones.contatosPessoasIdFK; }),
        __metadata("design:type", Array)
    ], ContatosPessoas.prototype, "pessoasTelefones", void 0);
    ContatosPessoas = __decorate([
        typeorm_1.Entity({ name: "contatos_pessoas" })
    ], ContatosPessoas);
    return ContatosPessoas;
}());
exports.ContatosPessoas = ContatosPessoas;
