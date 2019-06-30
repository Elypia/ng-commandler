import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DocData} from '../../../../../commandler/src/lib/doc-data';
import {Group} from '../../../../../commandler/src/lib/group';
import {Module} from '../../../../../commandler/src/lib/module';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  // TODO: Use a cache interceptor instead of storing it in a variable?
  private data: DocData;

  constructor(private client: HttpClient) {

  }

  public getData(): Observable<DocData> {
    if (this.data != null) {
      console.log('Returning cached copy of doc:\n', this.data);
      return of(this.data);
    }

    return this.client.get<DocData>('/data.json').pipe(
      map((response) => {
        console.log('Requested copy of doc:\n', response);
        return this.data = response;
      })
    );
  }

  public getGroups(modules: Module[]): Group[] {
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

    return groups;
  }
}
