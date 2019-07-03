import {Component, Input} from '@angular/core';
import {Module} from '../classes/module';

@Component({
  selector: 'cmd-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

  /** The module to display a panel for. */
  @Input() public module: Module;
}
