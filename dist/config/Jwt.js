"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var Jwt = /** @class */ (function () {
    function Jwt() {
    }
    Jwt.prototype.assinar = function (id, nomeUsuario, tipoUsuario) {
        var token = jsonwebtoken_1.default.sign({ id: id, nomeUsuario: nomeUsuario, tipoUsuario: tipoUsuario }, String(process.env.JWT_TOKEN), { expiresIn: '1d' });
        return token;
    };
    Jwt.prototype.decodificar = function (request, response, next) {
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
    };
    return Jwt;
}());
exports.default = Jwt;
