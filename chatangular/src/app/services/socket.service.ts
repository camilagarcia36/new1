import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
//hacer uso de socketio conexion
io = io("http://localhost:3000/", {
  withCredentials:true,
  //conexion automatica
  autoConnect: true
});
  constructor() {
   /* this.io.emit("test", {text: "HOLA MUNDO"}); //cliente emite eventos al servidor no al cliente
    this.io.on("test2",(objeto)=>{
      alert(objeto.text)
    });
*/


  }
}
