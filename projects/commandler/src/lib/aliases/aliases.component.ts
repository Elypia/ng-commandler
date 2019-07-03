import {Component, Input} from '@angular/core';

@Component({
  selector: 'cmd-aliases',
  templateUrl: './aliases.component.html',
  styleUrls: ['./aliases.component.css']
})
export class AliasesComponent {
  @Input() public aliases: string[];
}
