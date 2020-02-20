import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommandlerData, Controller} from '../commandler-data';
import {getGroups} from '../commandler-utils';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'cmd-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnChanges {

  /** A copy of the global commandler data of this instance. */
  @Input() public data: CommandlerData;

  /** The controllers grouped by by group name. */
  public groups: Map<string, Controller[]>;

  constructor(public navigationService: NavigationService) {

  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('Navigation component selected on: ', this.navigationService.selectedGroup, '>', this.navigationService.selectedModule);
    console.log('Navigation using controllers: ', this.data);

    if (this.data)
      this.groups = getGroups(this.data.controllers);
    else
      console.warn('Navigation initialization had null CommandlerData.');
  }
}
