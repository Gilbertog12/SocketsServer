import  express from "express";
import { server_port } from "../global/enviroment";


export default class Server {
    
    public app:express.Application;
    public port: number;


    constructor(){
        this.app =express();
        this.port = server_port;

    }


    start( callback :Function){

        this.app.listen(this.port,callback());

    }
    
}