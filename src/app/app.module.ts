import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainTopComponent } from './main-top/main-top.component';
import { OffertsComponent } from './offerts/offerts.component';
import { AboutComponent } from './about/about.component';
import { WorkshopSignupFormComponent } from './workshop-signup-form/workshop-signup-form.component';
import { CarProfileComponent } from './car-profile/car-profile.component';
import { ServiceFormComponent } from './service-form/service-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainTopComponent,
    OffertsComponent,
    AboutComponent,
    WorkshopSignupFormComponent,
    CarProfileComponent,
    ServiceFormComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
