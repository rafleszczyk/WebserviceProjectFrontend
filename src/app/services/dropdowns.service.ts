import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ICity} from '../../assets/models/city.interface';

@Injectable()
export class DropdownsService {
  constructor(private _http: HttpClient) {
  }

  getCities(): Observable<ICity[]> {
    return this._http.get<ICity[]>(`${environment.baseUrl}workshopprofiles/cities`)
      .map((data: any) => data.sort((a, b) => a.localeCompare(b)));
  }
}
