
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import LoginController from "./controller/LoginController";
import ExemplosJson from "./controller/ExemplosJson";
import Inicio from "./controller/Inicio";
import cors from 'cors'
import AtendimentosController from "./controller/AtendimentosController";
import {rotas} from "./util/rotasList";
import EmpresaController from "./controller/EmpresaController";
import RequisicaoDesenvolvimentoController from "./controller/RequisicaoDesenvolvimentoController";
import UsuariosController from "./controller/UsuariosController";

export class SetupServer extends Server {

  constructor(private port = 3333) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();

  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.setupControllers();
    //this.GetUse()
  }

  private setupControllers(): void {


    const atendimentos = new AtendimentosController()
    const empresa = new EmpresaController()
    const exemplos = new ExemplosJson()
    const inicio = new Inicio()
    const login = new LoginController()
    const requisicaoDesenvolvimentoController = new RequisicaoDesenvolvimentoController()
    const usuarios = new UsuariosController()




    this.addControllers(    [
          login,
          inicio,
          exemplos
        ]
    );
  }

  public getApp(): Application {
    return this.app;
  }

  private GetUse() : void{

    this.app.use(cors())


  }


  public start(): void {
    this.app.listen(this.port, () => {
      console.info('Server listening on port: ' + this.port);
    });
  }
}

