import {Component, Input} from '@angular/core';
import {Module} from '../classes/module';

@Component({
  selector: 'cmd-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  @Input() public group: string;
  @Input() public modules: Module[];
}
