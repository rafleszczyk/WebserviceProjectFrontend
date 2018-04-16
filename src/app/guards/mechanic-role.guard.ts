import {CanActivate, CanActivateChild, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {Injectable} from '@angular/core';

@Injectable()
export class MechanicRoleGuard implements CanActivate, CanActivateChild {

  constructor(private _loginService: LoginService, private _router: Router) {
  }

  canActivate() {
    return this.checkIfTokenExists();
  }

  canActivateChild() {
    return this.checkIfTokenExists();
  }

  checkIfTokenExists() {
    const role = this._loginService.returnRole();
    if (role === 'mechanic') {
      return true;
    } else {
      this._router.navigate(['home/login'])
      return false;
    }
  }
}
