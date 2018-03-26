import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {HomePageComponent} from './shared/home-page/home-page.component';
import {SharedModule} from './shared/shared.module';
import {ClientHomeComponent} from './client/client-home/client-home.component';
import {ClientModule} from './client/client.module';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'home/client', component: ClientHomeComponent},
  // { path: 'login', component: LoginComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    ClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
