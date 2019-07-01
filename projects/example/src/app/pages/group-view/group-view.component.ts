import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocService} from '../../services/doc/doc.service';
import {Group} from '../../../../../commandler/src/lib/group';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {

  public group: Group;

  constructor(
    private route: ActivatedRoute,
    private service: DocService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.service.getGroups().subscribe((groups) => {
        const query = params.get('group');

        for (const group of groups) {
          if (group.name.toLowerCase() === query.toLowerCase()) {
            this.group = group;
          }
        }
      });
    });
  }
}
