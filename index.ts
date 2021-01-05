import Server from './Classes/server';
import { server_port } from './global/enviroment';
import  router from './Routes/router';
import bodyParser from 'body-parser'
import cors from 'cors'



const server = new Server();

//BodyParser

server.app.use(bodyParser.urlencoded({extended:true}))
server.app.use(bodyParser.json())


//cors

server.app.use(cors({origin:true , credentials:true}))

server.app.use('/',router)


server.start( ()=>{
    console.log(`Servidor Corriendo en Puerto ${server_port}`)
});