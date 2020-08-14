"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./config/DataBaseConfig");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var Rotas_1 = __importDefault(require("./rotas/Rotas"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var port = process.env.PORT || 3333;
var app = express_1.default();
dotenv_1.default.config();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(Rotas_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '..', 'uploads')));
app.listen(port, function () { console.log("Servidor aberto na porta: " + port + "!!!"); });