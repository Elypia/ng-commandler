import {NgModule} from '@angular/core';
import {AliasesComponent} from './aliases.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AliasesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AliasesComponent
  ]
})
export class CmdAliasesModule { }
