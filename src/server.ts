
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import LoginController from "./controller/LoginController";
import ExemplosJson from "./controller/ExemplosJson";
import Inicio from "./controller/Inicio";
import cors from 'cors'
import AtendimentosController from "./controller/AtendimentosController";

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
    this.GetUse()
  }

  private setupControllers(): void {

    const login = new LoginController()
    const exemplos = new ExemplosJson()
    const atendimentos = new AtendimentosController()
    const inicio = new Inicio()

    this.addControllers([login ,inicio , exemplos, atendimentos]);
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

