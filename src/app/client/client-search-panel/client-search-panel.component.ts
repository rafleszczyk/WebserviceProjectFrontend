import {Component, OnInit} from '@angular/core';
import {WorkshopService} from '../../services/workshop.service';
import {IWorkshop} from '../../../assets/models/workshop.interface';
import {DropdownsService} from '../../services/dropdowns.service';

@Component({
  selector: 'app-client-search-panel',
  templateUrl: './client-search-panel.component.html',
  styleUrls: ['./client-search-panel.component.scss']
})

export class ClientSearchPanelComponent implements OnInit {

  workshopsList: IWorkshop[];
  cities: string[];

  constructor(private _workshopsService: WorkshopService,
              private _dropdownService: DropdownsService) {
    this.workshopsList = [];
    this.cities = [];
  }

  ngOnInit() {
    this.getCities();
  }

  getWorkshops(params) {
    this._workshopsService.getWorkshops().subscribe((data: IWorkshop[]) => this.workshopsList = data);
  }

  getCities() {
    this._dropdownService.getCities().subscribe((data: string[]) => {
        this.cities = data;
      }
    );
  }
}
