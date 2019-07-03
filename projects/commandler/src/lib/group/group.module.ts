import {NgModule} from '@angular/core';
import {GroupComponent} from './group.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CmdAliasesModule} from '../aliases/aliases.module';

@NgModule({
  declarations: [
    GroupComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CmdAliasesModule
  ],
  exports: [
    GroupComponent
  ]
})
export class CmdGroupModule { }
