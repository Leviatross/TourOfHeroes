import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
  
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}