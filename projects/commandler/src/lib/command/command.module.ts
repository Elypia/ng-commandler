import {NgModule} from '@angular/core';
import {CommandComponent} from './command.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CommandComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommandComponent
  ]
})
export class CmdCommandModule { }
