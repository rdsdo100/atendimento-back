import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import cors from 'cors'
import Inicio from './controller/Inicio';


export class SetupServer extends Server {

  constructor(private port = 3333) {
   super()
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();

  }

  private setupExpress(): void {
    this.app.use(cors())
    this.app.use(bodyParser.json());
    this.setupControllers();
  }

  private setupControllers(): void {
    const inicio = new Inicio()
    this.addControllers([inicio]);
    
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info('Server aberto na porta: ' + this.port);
    });
  }
}

