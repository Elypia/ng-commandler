import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Module} from '../classes/module';
import {CommandlerData} from '../classes/commandler-data';
import {getGroups} from '../classes/utils/commandler-utils';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'cmd-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnChanges {

  /** A copy of the global commandler data of this instance. */
  @Input() public data: CommandlerData;

  /** The modules grouped by by group name. */
  public groups: Map<string, Module[]>;

  constructor(public navigationService: NavigationService) {

  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('Navigation component selected on: ', this.navigationService.selectedGroup, '>', this.navigationService.selectedModule);
    console.log('Navigation using modules: ', this.data);

    if (this.data)
      this.groups = getGroups(this.data.modules);
    else
      console.warn('Navigation initialization had null CommandlerData.');
  }
}
