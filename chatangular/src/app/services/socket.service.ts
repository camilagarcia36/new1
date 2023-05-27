import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
//hacer uso de socketio conexion
io = io("https://t-hub.up.railway.app/", {
  withCredentials:true,
  //conexion automatica
  autoConnect: true
});
  constructor() {



  }
}
