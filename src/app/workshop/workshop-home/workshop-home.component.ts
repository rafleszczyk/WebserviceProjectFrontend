import {Component} from '@angular/core';
import {ISideNavigation} from '../../shared/side-navigation/side-navigation.interface';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-workshop-home',
  templateUrl: './workshop-home.component.html',
  styleUrls: ['./workshop-home.component.scss']
})

export class WorkshopHomeComponent {
  sideNavMetadata: ISideNavigation[];

  constructor(private _loginService: LoginService, private _router: Router) {
    this.buildSideNavigation();
  }

  buildSideNavigation() {
    this.sideNavMetadata = [
      {name: 'Workstation profile', redirectUrl: 'workstation-profile', favicon: 'fa fa-car'},
      {name: 'Calendar', redirectUrl: 'calendar', favicon: 'fa fa-calendar'},
      {name: 'Manage visits', redirectUrl: 'manage-visits', favicon: 'fa fa-calendar-check-o'},
      {name: 'Archive', redirectUrl: 'archive', favicon: 'fa fa-archive'}
    ];
  }

  logout() {
    this._loginService.logout();
    this._router.navigate(['/home/login']);
  }

}
