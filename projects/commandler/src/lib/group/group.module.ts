import {NgModule} from '@angular/core';
import {GroupComponent} from './group.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    GroupComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule
  ],
  exports: [
    GroupComponent
  ]
})
export class CmdGroupModule { }
