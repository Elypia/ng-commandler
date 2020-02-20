import {Component, Input} from '@angular/core';
import {Controller} from '../commandler-data';

@Component({
  selector: 'cmd-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  /** The controller to display a panel for. */
  @Input() public controller: Controller;
}
