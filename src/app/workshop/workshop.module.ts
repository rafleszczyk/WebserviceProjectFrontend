import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WorkshopHomeComponent} from './workshop-home/workshop-home.component';
import {WorkshopPanelComponent} from './workshop-panel/workshop-panel.component';

const routes: Routes = [
  {
    path: 'home/workshop',
    redirectTo: '/home/workshop/workstation-profile',
    pathMatch: 'full'
  },
  {
    path: 'home/workshop',
    component: WorkshopHomeComponent,
    data: {
      breadcrumbName: 'Home',
    },
    children: [
      {
        path: 'workstation-profile',
        component: WorkshopPanelComponent,
        data: {
          breadcrumbName: 'Panel',
        }
      },
    ]
  },
];

@NgModule({
  declarations: [
    WorkshopHomeComponent,
    WorkshopPanelComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
  ],
  providers: [],

})
export class WorkshopModule {
}
