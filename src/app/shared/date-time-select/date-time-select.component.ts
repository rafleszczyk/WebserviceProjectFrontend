import {Component} from '@angular/core';

@Component({
  selector: 'app-date-time-select',
  templateUrl: './date-time-select.component.html',
  styleUrls: ['./date-time-select.component.scss']
})
export class DateTimeSelectComponent {
  model;
  time: {hour: 9, minute: 0};
}
