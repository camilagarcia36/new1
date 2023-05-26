import { SocketService } from './socket.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class ChatService {
  chats:any=[];
   constructor(private socket: SocketService) {
    //this.onReciveMessage();
  }


  sendMessage(messageInfo: any) {
    this.chats.push(messageInfo);
    this.socket.io.emit("sendMessage", messageInfo);
    console.log(messageInfo); 
  }

  onReceiveMessage(){
    this.socket.io.on("recieveMessage", (messageInfo)=>{
      this.chats.push(messageInfo);
      alert("nuevomensaje");
      console.log(messageInfo);
    });
  }
}
