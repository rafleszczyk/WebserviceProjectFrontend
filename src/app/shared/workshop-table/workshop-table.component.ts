import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IWorkshop} from '../../../assets/models/workshop.interface';

@Component({
  selector: 'app-workshop-table',
  templateUrl: './workshop-table.component.html',
  styleUrls: ['./workshop-table.component.scss']
})
export class WorkshopTableComponent {
  @Input() workshopsList: IWorkshop[];
  @Input() selectedWorkshopId: number;
  @Output() newSelectedWorkshopId: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  selectWorkshop(workshopId: number) {
    this.newSelectedWorkshopId.emit(workshopId);
  }
}
