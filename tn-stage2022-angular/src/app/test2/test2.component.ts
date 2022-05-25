import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component implements OnInit {
  @Input()
  public arrayData: Array<any>;
  @Input()
  public stringData: string;

  @Output()
  public deletedMessage: EventEmitter<number>;

  constructor() {
    this.deletedMessage = new EventEmitter<number>();
  }

  ngOnInit() {}

  deleteMessage(id: number) {
    console.log('Received deletion in test2-component, emitting...');
    this.deletedMessage.emit(id);
  }
}
