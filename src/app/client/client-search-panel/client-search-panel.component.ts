import {Component} from '@angular/core';
import {WorkshopService} from '../../services/workshop.service';

@Component({
  selector: 'app-client-search-panel',
  templateUrl: './client-search-panel.component.html',
  styleUrls: ['./client-search-panel.component.scss']
})

export class ClientSearchPanelComponent {

  constructor(private _workshopsService: WorkshopService) {
    this._workshopsService.getWorkshops().subscribe((data) => console.log(data));
  }
}
