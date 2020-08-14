import "reflect-metadata";
import './config/DataBaseConfig'
import express from 'express'
import cors from 'cors'
import Rotas from "./rotas/Rotas"
import path from 'path'
import dotenv from "dotenv"

const port =  process.env.PORT || 3333
const app =express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(Rotas)
app.use('/uploads' , express.static(path.resolve(__dirname, '..' , 'uploads' )))


app.listen(port , ()=>{ console.log(`Servidor aberto na porta: ${port}!!!`) });
