import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SideNavigationComponent} from './side-navigation/side-navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SearchTabComponent} from './search-tab/search-tab.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {WorkstationTableComponent} from './workstation-table/workstation-table.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GoogleMapComponent} from './google-map/google-map.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomePageComponent,
    SideNavigationComponent,
    SearchTabComponent,
    BreadcrumbComponent,
    WorkstationTableComponent,
    GoogleMapComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    PageNotFoundComponent,
    HomePageComponent,
    SideNavigationComponent,
    SearchTabComponent,
    BreadcrumbComponent,
    WorkstationTableComponent,
    GoogleMapComponent,
  ],
  providers: [],

})
export class SharedModule {
}
