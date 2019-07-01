import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DocData} from '../../../../../commandler/src/lib/doc-data';
import {Group} from '../../../../../commandler/src/lib/group';
import {Module} from '../../../../../commandler/src/lib/module';
import {Metadata} from '../../../../../commandler/src/lib/metadata';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  // TODO: Use a cache interceptor instead of storing it in a variable?
  private data: DocData;

  constructor(private client: HttpClient) {

  }

  public getData(): Observable<DocData> {
    if (this.data) {
      console.log('Returning cached copy of data:', this.data);
      return of(this.data);
    }

    return this.client.get<DocData>('/data.json').pipe(
      map((response) => {
        console.log('Returning data from GET request: ', response);
        response.modules.sort((a, b) => a.name.localeCompare(b.name));

        for (const module of response.modules)
          module.commands.sort((a, b) => a.name.localeCompare(b.name));

        return this.data = response;
      })
    );
  }

  public getModules(): Observable<Module[]> {
    return this.getData().pipe(map((response) => response.modules));
  }

  public getMetadata(): Observable<Metadata> {
    return this.getData().pipe(map((response) => response.metadata));
  }

  public getGroups(): Observable<Group[]> {
    return this.getModules().pipe(
      map((modules) => {
        const groups: Group[] = [];

        for (const module of modules) {
          const moduleGroup = module.group;
          let group: Group = groups.find((o) => o.name === moduleGroup);

          if (!group) {
            group = {name: moduleGroup, modules: []};
            groups.push(group);
          }

          group.modules.push(module);
        }

        groups.sort((a, b) => a.name.localeCompare(b.name));
        return groups;
      })
    );
  }
}
