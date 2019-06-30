import {Component, Input} from '@angular/core';
import {Metadata} from '../metadata';

@Component({
  selector: 'ely-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() public metadata: Metadata;
}
