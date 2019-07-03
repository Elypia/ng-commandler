import {Component, OnInit} from '@angular/core';
import {CommandlerService} from '../services/commandler/commandler.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Module} from '../../../../commandler/src/lib/classes/module';
import {NavigationService} from '../../../../commandler/src/lib/navigation/navigation.service';

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.css']
})
export class ModulePageComponent implements OnInit {

  public module: Module;

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

      if (!params.has('module')) {
        this.router.navigate(['/', groupName]);
        return;
      }

      const moduleName: string = params.get('module');
      this.navigationService.selectedModule = moduleName;

      this.commandlerService.getCommandlerData().subscribe((response) => {
        for (const module of response.modules) {
          if (groupName === module.group && moduleName === module.name) {
            this.module = module;
            return;
          }
        }
      });
    });
  }
}
