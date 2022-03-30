import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  formControl = new FormControl('');
  constructor(private socket: Socket) {}

  public connect() {
    this.socket.connect();
  }
}
