import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-visits-table',
  templateUrl: './visits-table.component.html',
  styleUrls: ['./visits-table.component.scss']
})
export class VisitsTableComponent {

  @Input() mode: string;
  @Input() color: string;

  visits: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.getVisits();
  }

  getVisits() {
    this.visits =
      this.mode === 'client'
        ? this.http.get<any[]>('assets/data/visits-workstation-cli.json')
        : this.http.get<any[]>('assets/data/visits-workstation.json');
  }
}
