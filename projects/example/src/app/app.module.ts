import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ElyLoadableModule} from '@elypia/ng-elypian';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GroupPageComponent} from './group-page/group-page.component';
import {HttpClientModule} from '@angular/common/http';
import {CmdToolbarModule} from '../../../commandler/src/lib/toolbar/toolbar.module';
import {CmdNavigationModule} from '../../../commandler/src/lib/navigation/navigation.module';
import {CmdAliasesModule} from '../../../commandler/src/lib/aliases/aliases.module';
import {ModulePageComponent} from './module-page/module-page.component';
import {CmdModuleModule} from '../../../commandler/src/lib/module/module.module';
import {CmdGroupModule} from '../../../commandler/src/lib/group/group.module';

const routes: Routes = [
  { path: ':group/:module', component: ModulePageComponent },
  { path: ':group', component: GroupPageComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [
    AppComponent,
    GroupPageComponent,
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
    CmdAliasesModule,
    CmdModuleModule,
    CmdGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
