import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginService} from './login.service';
import {IComment} from '../../assets/models/comment.interface';

@Injectable()
export class PanelClientService {

  constructor(private _http: HttpClient, private _loginService: LoginService) {
  }

  getClient(): Observable<string[]> {
    // ID have to be given as input -> change it
    return this._http.get<string[]>('http://itappcarworkshopservice.azurewebsites.net/api/ClientProfile/WithCarsFollowed?ID=1');
    // return this._http.get<string[]>(`${environment.baseUrl}ClientProfile/${this._loginService.returnUser()}`);
  }
}
