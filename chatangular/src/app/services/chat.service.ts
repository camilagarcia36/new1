import { SocketService } from './socket.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class ChatService {
  chats:any=[];
   constructor(private socket: SocketService) {
    this.onReceiveMessage(); // Descomenta esta línea para habilitar la recepción de mensajes
  }


  sendMessage(messageInfo: any) {
    this.chats.push(messageInfo);
    this.socket.io.emit("sendMessage", messageInfo);
    console.log(messageInfo);
  }

  onReceiveMessage(){
    this.socket.io.on("recieveMessage", (messageInfo)=>{
      messageInfo.messageType = 2;
      console.log(messageInfo.messageType);
      this.chats.push(messageInfo);
      console.log(messageInfo);
    });
  }
}
