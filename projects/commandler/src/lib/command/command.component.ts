import {Component, Input} from '@angular/core';
import {Command} from '../command';

@Component({
  selector: 'ely-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  @Input() command: Command;
}
