import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocService} from '../../services/doc/doc.service';
import {Subscription} from 'rxjs';
import {DocData} from '../../../../../commandler/src/lib/doc-data';
import {Group} from '../../../../../commandler/src/lib/group';

@Component({
  selector: 'ely-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit, OnDestroy {

  @Input() private data: DocData;

  public group: Group;

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: DocService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.service.getData().subscribe((response) => {
        const groups: Group[] = this.service.getGroups(response.modules);
        const query = params.get('group');

        for (const group of groups) {
          if (group.name.toLowerCase() === query.toLowerCase()) {
            this.group = group;
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
