import {Component} from '@angular/core';
import {ISideNavigation} from '../../shared/side-navigation/side-navigation.interface';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})

export class ClientHomeComponent {
  sideNavMetadata: ISideNavigation[];

  constructor() {
    this.buildSideNavigation();
  }

  buildSideNavigation() {
    this.sideNavMetadata = [
      {name: 'Profile', redirectUrl: 'panel', favicon: 'fa fa-user'},
      {name: 'Plan visit', redirectUrl: 'visit', favicon: 'fa fa-calendar'},
      {name: 'Archive', redirectUrl: 'archive', favicon: 'fa fa-archive'}
    ];
  }

}
