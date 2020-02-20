import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoadState} from '@elypia/ng-elypian';
import {CommandlerService} from './services/commandler/commandler.service';
import {ActivatedRoute} from '@angular/router';
import {CommandlerData} from '../../../commandler/src/lib/commandler-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: CommandlerData;

  public state: LoadState = LoadState.Loading;

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private commandlerService: CommandlerService
  ) { }

  public ngOnInit(): void {
    console.log('Initializing application.');

    this.commandlerService.getCommandlerData().subscribe(
      (data) => {
        console.log('HTTP request complete.');
        this.data = data;

        this.state = LoadState.Loaded;
        console.log('LoadState has been set to: ', this.state);

        this.cd.detectChanges();
        this.cd.markForCheck();
      }, (error) => {
        console.error(error);
        this.state = LoadState.Failed;
        console.log('LoadState has been set to: ', this.state);
      }
    );
  }
}
