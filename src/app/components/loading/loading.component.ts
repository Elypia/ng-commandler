import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  /**
   * The message to write under the loading animation.
   */
  @Input() message: string;
}
