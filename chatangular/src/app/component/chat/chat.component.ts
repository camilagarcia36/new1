import { TokenStorageService } from 'src/app/services/token-storage.service';
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
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

   constructor(public chat: ChatService, private tokenStorage: TokenStorageService){}
  ngOnInit(): void {
    console.log("welcome");
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

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
