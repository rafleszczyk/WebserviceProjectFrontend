import {PanelClientService} from './services/panel-client.service';
import {BrowserModule} from '@angular/platform-browser';
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

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home/login', component: LoginComponent},
  {path: 'home', component: HomePageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ClientModule,
    BrowserModule,
    HttpClientModule,
    StarRatingModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU0Huhbr8nQ-TDJjacRyJm8M-owM-AxzI'
    })
  ],
  exports: [],
  providers: [
    LoginService,
    WorkshopService,
    DropdownsService,
    PanelClientService,
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
