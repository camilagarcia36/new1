import { ChatService } from './../../services/chat.service';
import { SocketService } from './../../services/socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  text = "";
   constructor(public chat: ChatService){}
  ngOnInit(): void {

}


sendMessage(){
let messageinfo = {
  text: this.text,
  messageType: 1
};
this.chat.sendMessage(messageinfo);
this.text = '';
}
}
