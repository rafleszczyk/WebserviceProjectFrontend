import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ICar} from '../../../assets/models/car.interface';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss']
})
export class CarsTableComponent implements OnChanges {
  @Input() cars: ICar[];


  ngOnChanges(change: SimpleChanges) {
    console.log(change, '<---------');
  }
}
