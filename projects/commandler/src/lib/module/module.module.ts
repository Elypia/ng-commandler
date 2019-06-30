import {NgModule} from '@angular/core';
import {ModuleComponent} from './module.component';

@NgModule({
  declarations: [
    ModuleComponent
  ],
  exports: [
    ModuleComponent
  ]
})
export class ElyModuleModule { }
