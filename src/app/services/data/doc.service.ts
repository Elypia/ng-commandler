import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DocData} from '../../classes/DocData';
import {Group} from '../../classes/Group';
import {Module} from '../../classes/Module';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  private data: DocData;

  constructor(private client: HttpClient) {

  }

  public getData(): Observable<DocData> {
    if (this.data != null) {
      console.log('Returning cached copy of data:\n', this.data);
      return of(this.data);
    }

    return this.client.get<DocData>('/data.json').pipe(
      map((response) => {
        console.log('Requested copy of data:\n', response);
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
