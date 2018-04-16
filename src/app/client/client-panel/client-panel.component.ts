import {WorkshopService} from './../../services/workshop.service';
import {PanelClientService} from './../../services/panel-client.service';
import {Component, OnInit} from '@angular/core';
import {ICar} from '../../../assets/models/car.interface';
import {IComment} from '../../../assets/models/comment.interface';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.scss']
})

export class ClientPanelComponent implements OnInit {
  client: string[];
  cars: ICar[];
  comments: IComment[];

  constructor(private _clientPanelService: PanelClientService, private _workshopService: WorkshopService) {
    this.cars = [];
  }

  ngOnInit() {
    this.getClient();
    this._workshopService.getUserComments()
      .subscribe((data: IComment[]) => this.comments = data);
    this._workshopService.getCars()
      .subscribe((data: ICar[]) => this.cars = data);
  }

  getClient() {
    this._clientPanelService.getClient().subscribe(client => {
      this.client = client;
    });
  }

}
