import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DocData} from '../../../commandler/src/lib/doc-data';
import {LoadState} from '@elypia/ng-elypian';
import {DocService} from './services/doc/doc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: DocData;
  public dataState: LoadState = LoadState.Loading;

  constructor(
    private cd: ChangeDetectorRef,
    private service: DocService
  ) { }

  ngOnInit(): void {
    console.log('Making HTTP request to get metadata.');

    this.service.getData().subscribe(
      (response) => {
        console.log('HTTP request complete.');
        this.data = response;
        this.dataState = LoadState.Loaded;
        console.log('LoadState has been set to: ', this.dataState);
        this.cd.detectChanges();
        this.cd.markForCheck();
      }, (error) => {
        console.error(error);
        this.dataState = LoadState.Failed;
        console.log('LoadState has been set to: ', this.dataState);
      }
    );

    console.log('Finished AppComponent#ngOnInit with a LoadState of: ', this.dataState);
  }
}
