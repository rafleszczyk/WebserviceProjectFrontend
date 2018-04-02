import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClientHomeComponent} from './client-home/client-home.component';
import {CommonModule} from '@angular/common';
import {ClientPanelComponent} from './client-panel/client-panel.component';
import {RouterModule, Routes} from '@angular/router';
import {ClientSearchPanelComponent} from './client-search-panel/client-search-panel.component';

const routes: Routes = [
  {
    path: 'home/client',
    redirectTo: '/home/client/panel',
    pathMatch: 'full'
  },
  {
    path: 'home/client',
    component: ClientHomeComponent,
    data: {
      breadcrumbName: 'Home',
    },
    children: [
      {
        path: 'panel',
        component: ClientPanelComponent,
        data: {
          breadcrumbName: 'Panel',
        }
      },
      {
        path: 'visit',
        component: ClientSearchPanelComponent,
        data: {
          breadcrumbName: 'Search Workstation',
        }
      }
    ]
  },
];

@NgModule({
  declarations: [
    ClientHomeComponent,
    ClientPanelComponent,
    ClientSearchPanelComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ClientHomeComponent,
  ],
  providers: [],

})
export class ClientModule {
}
