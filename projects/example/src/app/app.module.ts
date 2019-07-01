import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ElyLoadableModule} from '@elypia/ng-elypian';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GroupViewComponent} from './pages/group-view/group-view.component';
import {HttpClientModule} from '@angular/common/http';
import {CmdToolbarModule} from '../../../commandler/src/lib/toolbar/toolbar.module';
import {CmdNavigationModule} from '../../../commandler/src/lib/navigation/navigation.module';
import {CmdAliasesModule} from '../../../commandler/src/lib/aliases/aliases.module';
import {ModulePageComponent} from './pages/module-page/module-page.component';

const routes: Routes = [
  { path: ':group/:module', component: GroupViewComponent },
  { path: ':group', component: GroupViewComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [
    AppComponent,
    GroupViewComponent,
    HomeComponent,
    ModulePageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    ElyLoadableModule,
    RouterModule,
    CmdToolbarModule,
    CmdNavigationModule,
    CmdAliasesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
