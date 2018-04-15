import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home/client',
  //   redirectTo: '/home/client/panel',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home/client',
  //   component: ClientHomeComponent,
  //   data: {
  //     breadcrumbName: 'Home',
  //   },
  //   children: [
  //     {
  //       path: 'panel',
  //       component: ClientPanelComponent,
  //       data: {
  //         breadcrumbName: 'Panel',
  //       }
  //     },
  //   ]
  // },
];

@NgModule({
  declarations: [
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
