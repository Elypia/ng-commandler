import {NgModule} from '@angular/core';
import {ControllerComponent} from './controller.component';
import {RouterModule} from '@angular/router';
import {CmdCommandModule} from '../command/command.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ControllerComponent
  ],
  imports: [
    RouterModule,
    CmdCommandModule,
    CommonModule
  ],
  exports: [
    ControllerComponent
  ]
})
export class CmdControllerModule { }
