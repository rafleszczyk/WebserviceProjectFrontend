import {Component} from '@angular/core';
import {ISideNavigation} from '../../shared/side-navigation/side-navigation.interface';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})

export class ClientHomeComponent {
  sideNavMetadata: ISideNavigation[];

  constructor(private _loginService: LoginService, private _router: Router) {
    this.buildSideNavigation();
  }

  buildSideNavigation() {
    this.sideNavMetadata = [
      {name: 'Profile', redirectUrl: 'panel', favicon: 'fa fa-user'},
      {name: 'Plan visit', redirectUrl: 'visit', favicon: 'fa fa-calendar'},
      {name: 'Search car', redirectUrl: 'search-car', favicon: 'fa fa-search'},
      {name: 'Archive', redirectUrl: 'archive', favicon: 'fa fa-archive'}
    ];
  }

  logout() {
    this._loginService.logout();
    this._router.navigate(['home/login']);
  }

}
