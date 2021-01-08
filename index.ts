import Server from './Classes/server';
import { SERVER_PORT } from './global/enviroment';
import  router from './Routes/router';
import bodyParser from 'body-parser'
import cors from 'cors'



const server =  Server.instancse;

//BodyParser

server.app.use(bodyParser.urlencoded({extended:true}))
server.app.use(bodyParser.json())


//cors

server.app.use(cors({origin:true , credentials:true}))

server.app.use('/',router)


server.start( ()=>{
    console.log(`Servidor Corriendo en Puerto ${SERVER_PORT}`)
});