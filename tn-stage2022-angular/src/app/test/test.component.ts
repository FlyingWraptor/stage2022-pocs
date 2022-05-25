import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input()
  public objectData: any;

  @Output()
  public deleted: EventEmitter<number>;

  constructor() {
    this.deleted = new EventEmitter();
  }

  ngOnInit() {

  }

  deleteMessage() {
    console.log('Deleting message in test-component');
    this.deleted.emit(this.objectData.id);
  }
}
