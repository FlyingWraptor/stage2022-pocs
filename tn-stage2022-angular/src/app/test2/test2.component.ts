import { Component, Input } from '@angular/core';
import { CentralSourceService } from '../central-source.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component {
  @Input()
  public folder: string;

  constructor(private centralSource: CentralSourceService) {}

  get messages() {
    return this.centralSource.messages;
  }
}
