"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then(function () { return console.log("Conxão com banco iniciada com sucesso!"); })
    .catch(function (error) { return console.log(error); });
