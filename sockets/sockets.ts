import {Socket} from 'socket.io'
import socketIO from 'socket.io';




export const desconectar =  (cliente : Socket) =>{

    cliente.on('disconnect', ()=>{
        console.log('Cliente desconectado');
    });
}

export const mensaje = (cliente : Socket , io:socketIO.Server)=>{

    //escuchar mensajes

    cliente.on('mensaje',(payload:{de:string, message:string}, callback)=>{

        console.log('mensaje entrante', payload)

        io.emit('mensaje-nuevo', payload);

    })
    
}