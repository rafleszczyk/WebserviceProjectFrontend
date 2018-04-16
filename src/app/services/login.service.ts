import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ICity} from '../../assets/models/city.interface';

@Injectable()
export class LoginService {
  role: string;

  constructor(private _http: HttpClient) {
  }

  login(login: string, password: string, role: string): Observable<any> {
    this.role = role;
    return this._http.post(`${environment.baseUrl}Login`, {
      UserID: 7,
      UserEmail: login,
      UserPassword: password
    }, {
      responseType: 'text'
    })
      .do((response: string) => this.setTokenAndRole(response, role));
  }

  returnToken(): string {
    return localStorage.getItem('token');
  }

  returnRole(): string {
    return localStorage.getItem('role');
  }

  logout(): void {
    localStorage.clear();
  }

  setTokenAndRole(token: string, role: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }
}
