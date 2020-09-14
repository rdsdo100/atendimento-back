import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';


import { rotas } from './util/rotasList';

export class SetupServer extends Server {

  constructor(private port = 3333) {
   super()
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
console.log(rotas)

this.addControllers(rotas);
    
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info('Server listening on port: ' + this.port);
    });
  }
}

