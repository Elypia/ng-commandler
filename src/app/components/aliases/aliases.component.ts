import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-aliases',
  templateUrl: './aliases.component.html',
  styleUrls: ['./aliases.component.css']
})
export class AliasesComponent {
  @Input() aliases: string[];
}
