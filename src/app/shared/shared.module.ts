import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SideNavigationComponent} from './side-navigation/side-navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SearchTabComponent} from './search-tab/search-tab.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {WorkstationTableComponent} from './workstation-table/workstation-table.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomePageComponent,
    SideNavigationComponent,
    SearchTabComponent,
    BreadcrumbComponent,
    WorkstationTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PageNotFoundComponent,
    HomePageComponent,
    SideNavigationComponent,
    SearchTabComponent,
    BreadcrumbComponent,
    WorkstationTableComponent,
  ],
  providers: [],

})
export class SharedModule {
}
