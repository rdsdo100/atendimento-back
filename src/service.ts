import './util/module-alias';
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import {rotas} from "@src/util/Rotas";
import {errors} from "celebrate";
import cors from 'cors'


export class SetupServer extends Server {

    constructor(private port = 3000) {
        super();
    }

    public async init(): Promise<void> {
        this.setupExpress();
        this.setupControllers();
        this.error();
        this.cors()
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
        this.setupControllers();
    }

    private error(): void {
        this.app.use(errors())
    }
    private cors(): void {
        this.app.use(cors())
}

    private setupControllers(): void {
        this.addControllers(rotas)
    }

    public getApp(): Application {
        return this.app;
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.info('Servidor aberto na porta: ' + this.port);
        });
    }
}
