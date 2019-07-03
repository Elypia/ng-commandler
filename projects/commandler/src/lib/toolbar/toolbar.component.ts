import {Component, Input} from '@angular/core';
import {Metadata} from '../classes/metadata';

@Component({
  selector: 'cmd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() public metadata: Metadata;
}
