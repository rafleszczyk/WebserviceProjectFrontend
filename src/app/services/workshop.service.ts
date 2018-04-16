import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IWorkshop} from '../../assets/models/workshop.interface';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {IComment} from '../../assets/models/comment.interface';
import {ICar} from '../../assets/models/car.interface';
import {environment} from '../../environments/environment';


@Injectable()
export class WorkshopService {
  private selectedWorkshop: IWorkshop;

  constructor(private _http: HttpClient) {
    this.selectedWorkshop = null;
  }

  getWorkshops(data: { name: string, city: string }): Observable<any> {
    // return this._http.get<IWorkshop[]>('assets/data/workshops-mock.json');
    return this._http.get<IWorkshop[]>(`${environment.baseUrl}WorkshopProfiles`, {
      params: data
    });
  }

  setWorkshop(workshop: IWorkshop) {
    this.selectedWorkshop = workshop;
  }

  getWorkshop() {
    return this.selectedWorkshop;
  }

  getWorkshopComments(workshopId?: number) {
    return this._http.get<IComment[]>('assets/data/comments-mock.json');
  }

  getUserComments(userId?: number) {
    return this._http.get<IComment[]>('assets/data/user-comments-mock.json');
  }

  getCars(): Observable<ICar[]> {
    return this._http.get<ICar[]>('assets/data/cars-mock.json');
  }
}
