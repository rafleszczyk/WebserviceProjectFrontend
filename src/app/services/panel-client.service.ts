import { IClient } from './../../assets/models/client.interface';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class PanelClientService {

  constructor(private _http: HttpClient) {
  }

  getClient(): Observable<string[]> {
    // ID have to be given as input -> change it
    return this._http.get<string[]>('http://itappcarworkshopservice.azurewebsites.net/api/ClientProfile/WithCarsFollowed?ID=1');
  }
}
