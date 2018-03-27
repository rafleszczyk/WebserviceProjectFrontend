import {Component, Input} from '@angular/core';
import {ISideNavigation} from './side-navigation.interface';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})

export class SideNavigationComponent {
  @Input() sideNavMetadata: ISideNavigation[] = [];
}
