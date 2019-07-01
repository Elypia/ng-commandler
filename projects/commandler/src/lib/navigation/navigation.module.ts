import {NgModule} from '@angular/core';
import {NavigationComponent} from './navigation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatListModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    RouterTestingModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class CmdNavigationModule { }
