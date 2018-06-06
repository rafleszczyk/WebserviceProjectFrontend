import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ICar} from '../../assets/models/car.interface';
import {ICarService} from '../../assets/models/car-service.interface';
import {IBrand} from '../../assets/models/brand.interface';

@Injectable()
export class CarsService {
  constructor(private _http: HttpClient) {
  }

  getBrands(): Observable<IBrand[]> {
    return this._http.get<IBrand[]>(`${environment.baseUrl}CarBrands`);
  }

  getMarks(brand: string): Observable<string[]> {
    return this._http.get<string[]>('assets/data/marks-mock.json');
  }

  getCars(filters): Observable<ICar[]> {
    return this._http.get<ICar[]>(`${environment.baseUrl}CarProfile`,{
      params: {
        productionYear: filters.productionYear,
        brandID: filters.brand,
      }
    });
  }

  getCarByVIN(VIN: string): Observable<ICar[]> {
    return this._http.get<ICar>(`${environment.baseUrl}CarProfile`, {
      params: {VIN}
    }).map((car) => [car]);
  }

  getServiceHistory(CarID: number): Observable<any> {
    return this._http.get<string[]>('assets/data/service-history-mock.json');
  }
}
