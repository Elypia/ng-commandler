import {Component, Input} from '@angular/core';
import {Command} from '../classes/command';

@Component({
  selector: 'cmd-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  @Input() public command: Command;
}
