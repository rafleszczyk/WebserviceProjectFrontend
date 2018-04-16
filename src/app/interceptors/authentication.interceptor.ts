import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../services/login.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private _injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq: HttpRequest<any> = req.clone();
    const _loginService = this._injector.get(LoginService);
    const token = _loginService.returnToken();
console.log('<----- Interceptor triggered')
    if (token) {
      authReq = req.clone(
        {
          headers: req.headers
            .set('Authorization', 'Token : ' +  token)
            .set('Content-Type', 'application/json')
        }
      );
    } else {
      authReq = req.clone(
        {
          headers: req.headers
            .set('Content-Type', 'application/json')
        }
      );
    }
    return next.handle(authReq);
  }
}
