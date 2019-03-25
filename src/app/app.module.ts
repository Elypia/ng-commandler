import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommandComponent} from './components/command/command.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {LoadingComponent} from './components/loading/loading.component';
import {ErrorComponent} from './components/error/error.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/.router-outlets/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleComponent} from './components/module/module.component';
import {GroupComponent} from './components/group/group.component';
import {GroupViewComponent} from './components/.router-outlets/group-view/group-view.component';
import { AliasesComponent } from './components/aliases/aliases.component';

const routes: Routes = [
  { path: ':group', component: GroupViewComponent },
  { path: ':group/:module', component: GroupViewComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    NavbarComponent,
    HeaderComponent,
    LoadingComponent,
    ErrorComponent,
    HomeComponent,
    ModuleComponent,
    GroupComponent,
    GroupViewComponent,
    AliasesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
