import {Metadata} from './metadata';
import {Module} from './module';

export interface CommandlerData {
  metadata: Metadata;
  modules: Module[];
}
