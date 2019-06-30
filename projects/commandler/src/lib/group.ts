import {Module} from './module';

export interface Group {
  name: string;
  modules: Module[];
}
