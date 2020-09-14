import "reflect-metadata";
import './config/DataBaseConfig'
import dotenv from "dotenv"
import {SetupServer} from "./server";
dotenv.config()
const port = Number(process.env.PORT || 3333)
/*
const app =express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(Rotas)
app.use('/uploads' , express.static(path.resolve(__dirname, '..' , 'uploads' )))
app.use(errors())


app.listen(port , ()=>{ console.log(`Servidor aberto na porta: ${port}!!!`) });

*/

    const server = new SetupServer(port);
     server.init();
    server.start()
