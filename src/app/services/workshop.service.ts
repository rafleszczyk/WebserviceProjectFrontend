import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IWorkshop} from '../../assets/models/workshop.interface';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class WorkshopService {
  constructor(private _http: HttpClient) {
  }

  getWorkshops(name: string = '', city: string = ''): Observable<IWorkshop[]> {
    return this._http.get<IWorkshop[]>('assets/data/workshops-mock.json');
  }
}
