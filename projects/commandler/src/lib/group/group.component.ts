import {Component, Input} from '@angular/core';
import {Controller} from '../commandler-data';

@Component({
  selector: 'cmd-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  @Input() public group: string;
  @Input() public controllers: Controller[];
}
