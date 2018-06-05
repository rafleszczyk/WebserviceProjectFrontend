import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ICity} from '../../assets/models/city.interface';
import {ICar} from '../../assets/models/car.interface';
import {ICarService} from '../../assets/models/car-service.interface';

@Injectable()
export class CarsService {
  constructor(private _http: HttpClient) {
  }

  getBrands(): Observable<string[]> {
    return this._http.get<string[]>('assets/data/brands-mock.json');
  }

  getMarks(brand: string): Observable<string[]> {
    return this._http.get<string[]>('assets/data/marks-mock.json');
  }

  getCars(filters): Observable<ICar[]> {
    return this._http.get<ICar[]>('assets/data/cars-mock.json');
  }

  getCarByVIN(vin: string): Observable<ICar> {
    return this._http.get<ICar>('assets/data/cars-mock.json');
  }

  getServiceHistory(vin: string): Observable<any> {
    return this._http.get<ICarService[]>('assets/data/service-history-mock.json');
  }
}
