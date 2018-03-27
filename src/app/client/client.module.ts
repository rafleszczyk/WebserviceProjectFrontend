import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClientHomeComponent} from './client-home/client-home.component';
import {CommonModule} from '@angular/common';
import {ClientPanelComponent} from './client-panel/client-panel.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home/client',
    redirectTo: '/home/client/panel',
    pathMatch: 'full'
  },
  {
    path: 'home/client',
    component: ClientHomeComponent,
    children: [
      {
        path: 'panel',
        component: ClientPanelComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [
    ClientHomeComponent,
    ClientPanelComponent,
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
