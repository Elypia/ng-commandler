import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ElyLoadableModule} from '@elypia/elypian-angular';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GroupViewComponent} from './pages/group-view/group-view.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: ':group', component: GroupViewComponent },
  { path: ':group/:module', component: GroupViewComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [
    AppComponent,
    GroupViewComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    ElyLoadableModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
