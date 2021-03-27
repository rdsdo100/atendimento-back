"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodificar = exports.assinar = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function assinar(id, nomeUsuario, grupoUsuario) {
    var token = jsonwebtoken_1.default.sign({ id: id, nomeUsuario: nomeUsuario, grupoUsuario: grupoUsuario }, String(process.env.JWT_TOKEN), { expiresIn: '1d' });
    return token;
}
exports.assinar = assinar;
function decodificar(request, response, next) {
    var authorization = String(request.headers.authorization);
    jsonwebtoken_1.default.verify(authorization, String(process.env.JWT_TOKEN), function (err, decoded) {
        if (err) {
            return response.json({
                err: err,
                menssage: "invalido!!!!",
                isvalid: false
            });
        }
        request.body.decoded = decoded;
        return next();
    });
}
exports.decodificar = decodificar;
