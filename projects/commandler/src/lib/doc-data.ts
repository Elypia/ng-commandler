import {Metadata} from './metadata';
import {Module} from './module';

export interface DocData {
  metadata: Metadata;
  modules: Module[];
}
