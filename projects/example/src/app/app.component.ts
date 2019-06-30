import {Component, OnInit} from '@angular/core';
import {DocData} from '../../../commandler/src/lib/doc-data';
import {LoadState} from '@elypia/elypian-angular';
import {DocService} from './services/doc/doc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: DocData;
  public loadState: LoadState = LoadState.Loading;

  constructor(private service: DocService) {

  }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (response) => {
        this.data = response;
        this.loadState = LoadState.Loaded;
      }, () => this.loadState = LoadState.Failed
    );
  }
}
