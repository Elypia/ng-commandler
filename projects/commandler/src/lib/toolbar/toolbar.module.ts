import {NgModule} from '@angular/core';
import {ToolbarComponent} from './toolbar.component';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class CmdToolbarModule { }
