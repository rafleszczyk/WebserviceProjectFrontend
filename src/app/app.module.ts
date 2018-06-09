import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

// import { MainTopComponent } from './main-top/main-top.component';
// import { OffertsComponent } from './offerts/offerts.component';
// import { AboutComponent } from './about/about.component';
import {WorkshopSignupFormComponent} from './workshop-signup-form/workshop-signup-form.component';
import {CarProfileComponent} from './car-profile/car-profile.component';
import {ServiceFormComponent} from './service-form/service-form.component';
import {PanelClientService} from './services/panel-client.service';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {HomePageComponent} from './shared/home-page/home-page.component';
import {ClientModule} from './client/client.module';
import {WorkshopService} from './services/workshop.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DropdownsService} from './services/dropdowns.service';
import {AgmCoreModule} from '@agm/core';
import {StarRatingModule} from 'angular-star-rating';
import {LoginComponent} from './shared/login/login.component';
import {LoginService} from './services/login.service';
import {AuthenticationInterceptor} from './interceptors/authentication.interceptor';
import {WorkshopModule} from './workshop/workshop.module';
import {CarsService} from './services/cars.service';
import {ToasterModule} from 'angular2-toaster';
import {LandingPageComponent} from './landing page/landing-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home/login', component: LoginComponent},
  {path: 'home', component: LandingPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    // MainTopComponent,
    // OffertsComponent,
    // AboutComponent,
    WorkshopSignupFormComponent,
    CarProfileComponent,
    ServiceFormComponent,
    LandingPageComponent,
  ],
  imports: [
    ClientModule,
    WorkshopModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ToasterModule.forRoot(),
    StarRatingModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU0Huhbr8nQ-TDJjacRyJm8M-owM-AxzI'
    }),
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    LoginService,
    WorkshopService,
    DropdownsService,
    PanelClientService,
    CarsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
