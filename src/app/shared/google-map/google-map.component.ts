import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IWorkshop} from '../../../assets/models/workshop.interface';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnChanges, OnInit {
  @Input() color: string;
  @Input() workshopsList: IWorkshop[];
  @Input() selectedWorkshopId: number;
  @Output() selectWorkshop: EventEmitter<number> = new EventEmitter<number>();

  currentLocation: IWorkshop;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.workshopsList.length > 0) {
      this.currentLocation = this.workshopsList.find((workshop: IWorkshop) => workshop.WorkshopID === this.selectedWorkshopId);
    }
  }

  selectLocation(workshopId: number) {
    this.selectWorkshop.emit(workshopId);
    this.currentLocation = this.workshopsList.find((workshop: IWorkshop) => workshop.WorkshopID === workshopId);
  }
}
