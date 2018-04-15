import {Component, OnInit} from '@angular/core';
import {WorkshopService} from '../../services/workshop.service';
import {IWorkshop} from '../../../assets/models/workshop.interface';
import {DropdownsService} from '../../services/dropdowns.service';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-client-search-panel',
  templateUrl: './client-search-panel.component.html',
  styleUrls: ['./client-search-panel.component.scss']
})

export class ClientSearchPanelComponent implements OnInit {

  selectedWorkshopId: number;
  workshopsList: IWorkshop[];
  cities: string[];

  constructor(private _workshopsService: WorkshopService,
              private _dropdownService: DropdownsService) {
    this.selectedWorkshopId = -1;
    this.workshopsList = [];
    this.cities = [];
  }

  ngOnInit() {
    this.getCities();
  }

  setSelectedWorkshop(workshopId: number) {
    this.selectedWorkshopId = workshopId;
  }

  getWorkshops() {
    this.workshopsList = [];
    this._workshopsService.getWorkshops()
      .subscribe((data: IWorkshop[]) => {
        this.workshopsList = data;
        this.selectedWorkshopId = data[0].Workshop_ID;
      });
  }

  getCities() {
    this._dropdownService.getCities().subscribe((data: string[]) => {
        this.cities = data;
      }
    );
  }
}
