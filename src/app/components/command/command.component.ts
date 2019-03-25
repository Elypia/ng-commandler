import {Component, Input} from '@angular/core';
import {Command} from '../../classes/Command';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  @Input() command: Command;
}
