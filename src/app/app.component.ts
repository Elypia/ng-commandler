import {Component, OnInit} from '@angular/core';
import {DocService} from './services/data/doc.service';
import {LoadState} from './classes/LoadState';
import {DocData} from './classes/DocData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: DocData;

  public loadEnum = LoadState;
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
