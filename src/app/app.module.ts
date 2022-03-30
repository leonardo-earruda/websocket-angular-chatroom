import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatroomComponent } from './modules/components/chatroom/chatroom/chatroom.component';
import { ReactiveFormsModule } from '@angular/forms';

const config: SocketIoConfig = {
  url: 'ws://localhost:8080',
};
@NgModule({
  declarations: [AppComponent, ChatroomComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent, ChatroomComponent],
})
export class AppModule {}
