import {Component, Input, OnInit} from '@angular/core';
import {DocData} from '../doc-data';
import {Group} from '../group';
import {DocService} from '../../../../example/src/app/services/doc/doc.service';

@Component({
  selector: 'ely-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public data: DocData;
  public groups: Group[];

  constructor(public service: DocService) {

  }

  public ngOnInit(): void {
    this.groups = this.service.getGroups(this.data.modules);
  }
}
