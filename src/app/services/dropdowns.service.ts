import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DropdownsService {
  constructor(private _http: HttpClient) { }

  getCities(): Observable<string[]> {
    // return this._http.get<string[]>(`${environment.baseUrl}workshopprofiles/cities`)
    return this._http.get<string[]>(`assets/data/cities-mock.json`)
      .map((data: any) => data.cities.sort());
  }
}
