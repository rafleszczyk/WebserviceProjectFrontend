import {Component} from '@angular/core';
import {WorkshopService} from '../../services/workshop.service';
import {IWorkshop} from '../../../assets/models/workshop.interface';

@Component({
  selector: 'app-client-search-panel',
  templateUrl: './client-search-panel.component.html',
  styleUrls: ['./client-search-panel.component.scss']
})

export class ClientSearchPanelComponent {

  workshopsList: IWorkshop[];

  constructor(private _workshopsService: WorkshopService) {
    this.workshopsList = [];
  }

  getWorkshops(params) {
    this._workshopsService.getWorkshops().subscribe((data) => this.workshopsList = data);
  }
}
