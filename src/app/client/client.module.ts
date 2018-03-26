import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClientHomeComponent} from './client-home/client-home.component';

@NgModule({
  declarations: [
    ClientHomeComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ClientHomeComponent,
  ],
  providers: [],

})
export class ClientModule {
}
