import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/modules/services/websocket.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
})
export class ChatroomComponent implements OnInit {
  inputMessage = new FormControl('');
  messages: string[] = [];
  constructor(private socketService: SocketService, private socket: Socket) {}

  ngOnInit(): void {
    this.socketService.connect();
    this.receiveMessage();
  }

  public emitMessage() {
    const text = this.inputMessage.value;
    this.socket.emit('message', text);
  }

  public receiveMessage() {
    this.socket.on('message', (text: any) => {
      this.messages.push(text);
    });
  }
}
