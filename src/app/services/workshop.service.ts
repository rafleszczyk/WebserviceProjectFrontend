import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IWorkshop} from '../../assets/models/workshop.interface';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class WorkshopService {
  constructor(private _http: HttpClient) { }

  getWorkshops (): Observable<IWorkshop[]> {
    return this._http.get<IWorkshop[]>('assets/data/workshops-mock.json')
      .pipe(
        catchError((e) => console.log(e))
      );
  }
}
