import {Component, Input, OnInit} from '@angular/core';
import {DocData} from '../../classes/DocData';
import {DocService} from '../../services/data/doc.service';
import {Group} from '../../classes/Group';

@Component({
  selector: 'app-navbar',
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
