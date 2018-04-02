import {Component, Input, Output} from '@angular/core';
import {IWorkshop} from '../../../assets/models/workshop.interface';

@Component({
  selector: 'app-workstation-table',
  templateUrl: './workstation-table.component.html',
  styleUrls: ['./workstation-table.component.scss']
})
export class WorkstationTableComponent {
  @Input() workshopsList: IWorkshop[];
  @Output() selectedWorkshopId: number;

  constructor(){}
}
