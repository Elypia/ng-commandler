import {Module} from '../module';
import {groupBy} from './array-utils';

/**
 * @param modules Group this array of modules by {@link Module.group}.
 */
export function getGroups(modules: Module[]): Map<string, Module[]> {
  return groupBy(modules, (module) => module.group);
}
