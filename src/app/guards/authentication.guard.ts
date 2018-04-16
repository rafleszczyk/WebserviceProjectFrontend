import {CanActivate, CanActivateChild, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {

  constructor(private _router: Router) {
  }

  canActivate() {
    return this.checkIfTokenExists();
  }

  canActivateChild() {
    return this.checkIfTokenExists();
  }

  checkIfTokenExists() {
    if (!!localStorage.getItem('token')) {
      return true;
    } else {
      this._router.navigate(['home/login'])
      return false;
    }
  }
}
