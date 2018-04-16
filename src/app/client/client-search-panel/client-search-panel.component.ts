import {Component, OnInit} from '@angular/core';
import {WorkshopService} from '../../services/workshop.service';
import {IWorkshop} from '../../../assets/models/workshop.interface';
import {DropdownsService} from '../../services/dropdowns.service';
import 'rxjs/add/operator/do';
import {ICity} from '../../../assets/models/city.interface';

@Component({
  selector: 'app-client-search-panel',
  templateUrl: './client-search-panel.component.html',
  styleUrls: ['./client-search-panel.component.scss']
})

export class ClientSearchPanelComponent implements OnInit {

  selectedWorkshopId: number;
  workshopsList: IWorkshop[];
  cities: ICity[];

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

  getWorkshops(event) {
    this.workshopsList = [];
    this._workshopsService.getWorkshops(event)
      .subscribe((data: IWorkshop[]) => {
        data.forEach((el: IWorkshop) => {
          el.Latitude = +el.Latitude;
          el.Longtitude = +el.Longtitude;
        });
        console.log(data);
        this.workshopsList = data;
        this.selectedWorkshopId = data[0].WorkshopID;
      });
  }

  setWorkshopAsSelected() {
    this._workshopsService.setWorkshop(
      this.workshopsList.find((workshop: IWorkshop) => workshop.WorkshopID === this.selectedWorkshopId)
    );
  }

  getCities() {
    this._dropdownService.getCities().subscribe((data: ICity[]) => {
        this.cities = data;
      }
    );
  }
}
