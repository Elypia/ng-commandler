import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandlerService} from '../services/commandler/commandler.service';
import {Module} from '../../../../commandler/src/lib/classes/module';
import {getGroups} from '../../../../commandler/src/lib/classes/utils/commandler-utils';
import {NavigationService} from '../../../../commandler/src/lib/navigation/navigation.service';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {

  public group: string;
  public modules: Module[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commandlerService: CommandlerService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navigationService.selectedModule = null;

    this.route.paramMap.subscribe((params) => {
      if (!params.has('group')) {
        this.router.navigate(['/']);
        this.navigationService.selectedGroup = null;
        return;
      }

      const groupName: string = params.get('group');
      this.navigationService.selectedGroup = groupName;

      this.commandlerService.getCommandlerData().subscribe((response) => {
        const groups = getGroups(response.modules);

        groups.forEach((modules: Module[], group: string) => {
          if (groupName === group) {
            this.group = group;
            this.modules = modules;
          }
        });
      });
    });
  }
}
