
import"./util/module-alias"
import "reflect-metadata";
import './config/DataBaseConfig'
import dotenv from "dotenv"

import {SetupServer} from "@src/service";
/*
import express from 'express'
import cors from 'cors'
import Rotas from "./rotas/Rotas"
import path from 'path'
import dotenv from "dotenv"

import {errors} from 'celebrate'

const port =  process.env.PORT || 3333
const app =express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(Rotas)
app.use('/uploads' , express.static(path.resolve(__dirname, '..' , 'uploads' )))
app.use(errors())


app.listen(port , ()=>{ console.log(`Servidor aberto na porta: ${port}!!!`) });
*/


(async (): Promise<void> => {
    const port =  Number(process.env.PORT || 3333)
    const server = new SetupServer(port);
    await server.init();
    server.start();
})();
