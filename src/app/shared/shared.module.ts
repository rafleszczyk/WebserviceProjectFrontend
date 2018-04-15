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
import {WorkshopDetailsComponent} from './workshop-details/workshop-details.component';
import {CommentsTableComponent} from './comments-table/comments-table.component';
import {DateTimeSelectComponent} from './date-time-select/date-time-select.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationGuard} from '../guards/authentication.guard';
import {ClientRoleGuard} from '../guards/client-role.guard';
import {MechanicRoleGuard} from '../guards/mechanic-role.guard';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomePageComponent,
    SideNavigationComponent,
    SearchTabComponent,
    BreadcrumbComponent,
    WorkshopTableComponent,
    GoogleMapComponent,
    WorkshopDetailsComponent,
    CommentsTableComponent,
    DateTimeSelectComponent,
    LoginComponent,
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
    WorkshopDetailsComponent,
    CommentsTableComponent,
    DateTimeSelectComponent,
    LoginComponent,
  ],
  providers: [
    AuthenticationGuard,
    ClientRoleGuard,
    MechanicRoleGuard,
  ],

})
export class SharedModule {
}
