import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ICity} from '../../assets/models/city.interface';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) {
  }

  login(login: string, password: string, role: string): Observable<any> {
    return this._http.post(`${environment.baseUrl}Login`, {
      UserID: 7,
      UserEmail: login,
      UserPassword: password
    })
      .do((response: any) => {
        this.setToken(response.Token);
        this.setUser(response.ClientID);
        this.setRole(role);
      });
  }

  returnToken(): string {
    return localStorage.getItem('token');
  }

  returnRole(): string {
    return localStorage.getItem('role');
  }

  returnUser(): any {
    return localStorage.getItem('user');
  }

  logout(): void {
    localStorage.clear();
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  setUser(user: any): void {
    localStorage.setItem('user', user);
  }
}
