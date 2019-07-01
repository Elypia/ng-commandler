import {Component, OnInit} from '@angular/core';
import {Metadata} from '../metadata';
import {DocService} from '../../../../example/src/app/services/doc/doc.service';

@Component({
  selector: 'cmd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public metadata: Metadata;

  constructor(private docs: DocService) {

  }

  ngOnInit(): void {
      this.docs.getMetadata().subscribe((o) => {
        this.metadata = o;
      });
  }
}
