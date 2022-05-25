import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class CentralSourceService {
  private messagesList: Array<Message>;
  private messageSubject: Subject<Array<Message>>;
  private messages$: Observable<Array<Message>>;

  constructor() {
    const messageSubject = new Subject<Array<Message>>();
    this.messageSubject = messageSubject;
    this.messages$ = messageSubject.asObservable();
  }

  get messages() {
    return this.messages$;
  }

  updateMessages(values: Array<Message>) {
    console.log('Updating messages');
    this.messagesList = values;
    this.messageSubject.next(values);
  }

  deleteMessage(id: number) {
    console.log('Removing message from messagesList');
    const messages = this.messagesList.filter(x => x.id !== id);
    this.updateMessages(messages);
  }
}
