import * as SockJS from 'sockjs-client';
import { Component, OnInit } from '@angular/core';
import { Client } from '@stomp/stompjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private client: Client;

  constructor() {
    this.client = new Client();
  }

  ngOnInit(): void {
    this.connect();
    console.log('hmm');
  }

  connect(): void {
    this.client.webSocketFactory = () => {
      return new SockJS('http://localhost:5000/chat-websocket');
    };

    this.client.onConnect = (frame: unknown) => {
      console.log(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Connected: ${this.client.connected} | Frame ${frame}`
      );
    };

    this.client.activate();
  }
}
