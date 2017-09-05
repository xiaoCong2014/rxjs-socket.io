import {NgModule} from '@angular/core';
import {ClientAppComponent} from './client.component';
import {ChatComponent} from './chat/chat.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ChatService} from "./service/chat.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ClientAppComponent, ChatComponent],
  providers: [ ChatService ],// 全局引入

  bootstrap: [ClientAppComponent],

})

export class AppModule {}
