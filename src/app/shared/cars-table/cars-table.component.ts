import {Component, Input} from '@angular/core';
import {ICar} from '../../../assets/models/car.interface';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss']
})
export class CarsTableComponent {
  @Input() cars: ICar[];
}
