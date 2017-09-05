import { Component, OnInit,OnDestroy } from '@angular/core';
import { ChatService }       from '../service/chat.service';

@Component({
  selector: 'chat-component',
  templateUrl: './chat.component.html'// ,
  // providers: [ ChatService ]// 只是局部引入 , 没有全局引入
})
export class ChatComponent implements OnInit, OnDestroy {
  private messages = [];
  private connection;

  /**
   * 当前的信息 , 可能即将被发送
   */
  private message;

  constructor(private chatService:ChatService) {}

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
