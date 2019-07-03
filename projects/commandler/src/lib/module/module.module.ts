import {NgModule} from '@angular/core';
import {ModuleComponent} from './module.component';
import {RouterModule} from '@angular/router';
import {CmdAliasesModule} from '../aliases/aliases.module';
import {CmdCommandModule} from '../command/command.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    RouterModule,
    CmdAliasesModule,
    CmdCommandModule,
    CommonModule
  ],
  exports: [
    ModuleComponent
  ]
})
export class CmdModuleModule { }
