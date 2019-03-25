import {Component, Input} from '@angular/core';
import {Metadata} from '../../classes/Metadata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() public metadata: Metadata;
}
