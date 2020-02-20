import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CommandlerData} from '../../../../../commandler/src/lib/commandler-data';

@Injectable({
  providedIn: 'root'
})
export class CommandlerService {

  // TODO: Use a cache interceptor instead of storing it in a variable?
  private commandlerData: CommandlerData;

  constructor(private client: HttpClient) {

  }

  public getCommandlerData(): Observable<CommandlerData> {
    if (this.commandlerData) {
      console.log('Returning cached copy of data:', this.commandlerData);
      return of(this.commandlerData);
    }

    return this.client.get<CommandlerData>('/commandlerdoc.json').pipe(
      map((response) => {
        console.log('Returning data from GET request: ', response);
        response.controllers.sort((a, b) => a.name.localeCompare(b.name));

        for (const controller of response.controllers)
          controller.commands.sort((a, b) => a.name.localeCompare(b.name));

        return this.commandlerData = response;
      })
    );
  }
}
