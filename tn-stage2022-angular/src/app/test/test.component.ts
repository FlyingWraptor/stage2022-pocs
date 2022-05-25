import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CentralSourceService } from '../central-source.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input()
  public objectData: any;

  constructor(private centralSource: CentralSourceService) {}

  ngOnInit() {

  }

  deleteMessage() {
    console.log('Deleting message in test-component');
    this.centralSource.deleteMessage(this.objectData.id);
  }
}
