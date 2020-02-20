import {Component, OnInit} from '@angular/core';
import {CommandlerService} from '../services/commandler/commandler.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationService} from '../../../../commandler/src/lib/navigation/navigation.service';
import {Controller} from '../../../../commandler/src/lib/commandler-data';

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.css']
})
export class ModulePageComponent implements OnInit {

  public controller: Controller;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commandlerService: CommandlerService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (!params.has('group')) {
        this.router.navigate(['/']);
        return;
      }

      const groupName: string = params.get('group');
      this.navigationService.selectedGroup = groupName;

      if (!params.has('controller')) {
        this.router.navigate(['/', groupName]);
        return;
      }

      const moduleName: string = params.get('controller');
      this.navigationService.selectedModule = moduleName;

      this.commandlerService.getCommandlerData().subscribe((response) => {
        for (const controller of response.controllers) {
          if (groupName === controller.group && moduleName === controller.name) {
            this.controller = controller;
            return;
          }
        }
      });
    });
  }
}
