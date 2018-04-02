import {Component} from '@angular/core';
import {ISideNavigation} from '../../shared/side-navigation/side-navigation.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})

export class ClientHomeComponent {
  sideNavMetadata: ISideNavigation[];
  breadcrumb: string;

  constructor(private test: ActivatedRoute) {
    this.breadcrumb = '';
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
