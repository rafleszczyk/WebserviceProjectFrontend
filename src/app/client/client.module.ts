import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClientHomeComponent} from './client-home/client-home.component';
import {CommonModule} from '@angular/common';
import {ClientPanelComponent} from './client-panel/client-panel.component';
import {RouterModule, Routes} from '@angular/router';
import {ClientSearchPanelComponent} from './client-search-panel/client-search-panel.component';
import {ClientVisitDetailsPanelComponent} from './client-visit-details-panel/client-visit-details-panel.component';
import {SelectedWorkshopResolver} from './resolvers/selected-workshop.resolver';

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
          breadcrumbName: 'Search Workshop',
        }
      },
      {
        path: 'visit/details',
        component: ClientVisitDetailsPanelComponent,
        data: {
          breadcrumbName: 'Search Workshop / Plan visit',
        },
        resolve: { workshop: SelectedWorkshopResolver }
      }
    ]
  },
];

@NgModule({
  declarations: [
    ClientHomeComponent,
    ClientPanelComponent,
    ClientSearchPanelComponent,
    ClientVisitDetailsPanelComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ClientHomeComponent,
  ],
  providers: [
    SelectedWorkshopResolver,
  ],

})
export class ClientModule {
}
