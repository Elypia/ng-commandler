import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  /** The current group that is selected. */
  public selectedGroup: string;

  /** The current module that is selected. */
  public selectedModule: string;
}
