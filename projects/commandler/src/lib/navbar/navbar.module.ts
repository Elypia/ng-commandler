import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    RouterTestingModule,
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ElyNavbarModule { }
