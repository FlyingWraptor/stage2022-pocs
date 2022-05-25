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
      const messages = [
        {
          id: 1,
          title: 'Your yearly bonus has arrived',
          from: 'support@thebestfridges.com',
          to: 'hubert.poccer@company.tld',
          description: 'Thank you for chosing us, we have added a yearly bonus to you balance!'
        },
        {
          id: 2,
          title: 'Meeting, today at 2PM',
          from: 'nancy.kricketeer@company.tld',
          to: 'hubert.poccer@company.tld',
          description: 'Will you be joining us at the salesmeeting at 2PM this afternoon?'
        },
        {
          id: 3,
          title: 'There are bagels in the cafeteria',
          from: 'gilles.bagel@company.tld',
          to: 'Sales department',
          description: 'My wife made some bagels, I don\'t like them, so I left them in the cafeteria. PLEASE be sure to take one.'
        }
      ];
      this.centralSource.updateMessages(messages);
    }
  }
}
