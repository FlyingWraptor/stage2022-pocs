import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentralSourceService } from '../central-source.service';
import { Message } from '../message';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements AfterViewInit {
  public folder: string;

  public messages: Array<Message>;

  constructor(private activatedRoute: ActivatedRoute,
    private centralSource: CentralSourceService) { }

  ngAfterViewInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.folder === 'Inbox') {
      this.centralSource.retrieveMessages();
    } else {
      this.centralSource.updateMessages([]);
    }
  }
}
