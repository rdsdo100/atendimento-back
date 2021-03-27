"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./config/DataBaseConfig");
var dotenv_1 = __importDefault(require("dotenv"));
var server_1 = require("./server");
dotenv_1.default.config();
var port = Number(process.env.PORT || 3333);
var server = new server_1.SetupServer(port);
server.init();
server.start();
