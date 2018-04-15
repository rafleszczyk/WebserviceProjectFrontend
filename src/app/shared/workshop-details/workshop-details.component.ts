import {Component, Input} from '@angular/core';
import {IWorkshop} from '../../../assets/models/workshop.interface';

@Component({
  selector: 'app-workshop-details',
  templateUrl: './workshop-details.component.html',
  styleUrls: ['./workshop-details.component.scss']
})

export class WorkshopDetailsComponent {

  @Input() workshop: IWorkshop;
  constructor() {}
}
