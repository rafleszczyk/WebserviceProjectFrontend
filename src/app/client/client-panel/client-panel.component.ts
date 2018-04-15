import { IClient } from './../../../assets/models/client.interface';
import { WorkshopService } from './../../services/workshop.service';
import { PanelClientService } from './../../services/panel-client.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.scss']
})

export class ClientPanelComponent implements OnInit {
  client: string[];
  constructor(private _clientPanelService: PanelClientService) {

  }
  ngOnInit() {
    this.getClient();
  }
  getClient() {
    this._clientPanelService.getClient().subscribe(client => {
    console.log(client);
    this.client = client;
    });
  }

}
