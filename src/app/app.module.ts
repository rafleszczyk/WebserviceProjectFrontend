import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {MainTopComponent} from './main-top/main-top.component';
import {OffertsComponent} from './offerts/offerts.component';
import {AboutComponent} from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MainTopComponent,
    OffertsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
