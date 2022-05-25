import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Message } from './message';

const URL = 'http://localhost:4000/';

@Injectable({
  providedIn: 'root'
})
export class CentralSourceService {
  private messageSubject: Subject<Array<Message>>;
  private messages$: Observable<Array<Message>>;

  constructor(private httpClient: HttpClient) {
    const messageSubject = new Subject<Array<Message>>();
    this.messageSubject = messageSubject;
    this.messages$ = messageSubject.asObservable();
  }

  get messages() {
    return this.messages$;
  }

  retrieveMessages() {
    this.httpClient.get<Message[]>(`${URL}messages`).subscribe(x => this.updateMessages(x));
  }

  updateMessages(values: Array<Message>) {
    console.log('Updating messages');
    this.messageSubject.next(values);
  }

  deleteMessage(id: number) {
    this.httpClient.delete(`${URL}messages/${id}`).subscribe(_ => this.retrieveMessages());
  }
}
