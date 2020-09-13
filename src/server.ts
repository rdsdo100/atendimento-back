
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import LoginController from "./controller/LoginController";
import ExemplosJson from "./controller/ExemplosJson";
import Inicio from "./controller/Inicio";




export class SetupServer extends Server {

  constructor(private port = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();

  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.setupControllers();
  }

  private setupControllers(): void {

    const login = new LoginController()
    const exemplos = new ExemplosJson()
    const inicio = new Inicio()

    this.addControllers([login ,inicio , exemplos]);
  }

  public getApp(): Application {
    return this.app;
  }


  public start(): void {
    this.app.listen(this.port, () => {
      console.info('Server listening on port: ' + this.port);
    });
  }
}

