import {NgModule} from '@angular/core';
import {CommandComponent} from './command.component';
import {CommonModule} from '@angular/common';
import {CmdAliasesModule} from '../aliases/aliases.module';

@NgModule({
  declarations: [
    CommandComponent
  ],
  imports: [
    CommonModule,
    CmdAliasesModule
  ],
  exports: [
    CommandComponent
  ]
})
export class CmdCommandModule { }
