import {groupBy} from './array-utils';
import {Controller} from './commandler-data';

/**
 * @param modules Group this array of controllers by {@link Controller.group}.
 */
export function getGroups(modules: Controller[]): Map<string, Controller[]> {
  return groupBy(modules, (module) => module.group);
}
