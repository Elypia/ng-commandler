import {Component, OnInit} from '@angular/core';
import {Group} from '../group';
import {DocService} from '../../../../example/src/app/services/doc/doc.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cmd-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public groups: Group[];

  /** The current group that is selected. */
  private selectedGroup: string;

  /** The current module that is selected. */
  private seletcedModule: string;

  constructor(
    private route: ActivatedRoute,
    public service: DocService
  ) { }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedGroup = params.get('group');
      this.seletcedModule = params.get('module');

      console.log('Navigation bar set to Group:Module: ', this.selectedGroup, ':', this.seletcedModule);
    });

    this.service.getGroups().subscribe((groups) => {
      this.groups = groups;
      console.log('Navigation inititalized with:', this.groups);
    });
  }
}
