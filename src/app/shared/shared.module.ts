import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SideNavigationComponent} from './side-navigation/side-navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SearchTabComponent} from './search-tab/search-tab.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {WorkshopTableComponent} from './workshop-table/workshop-table.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GoogleMapComponent} from './google-map/google-map.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomePageComponent,
    SideNavigationComponent,
    SearchTabComponent,
    BreadcrumbComponent,
    WorkshopTableComponent,
    GoogleMapComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    AgmCoreModule,
    FormsModule
  ],
  exports: [
    PageNotFoundComponent,
    HomePageComponent,
    SideNavigationComponent,
    SearchTabComponent,
    BreadcrumbComponent,
    WorkshopTableComponent,
    GoogleMapComponent,
  ],
  providers: [],

})
export class SharedModule {
}
