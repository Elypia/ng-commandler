import {Command} from './command';

export interface Module {
  group: string;
  name: string;
  aliases: string[];
  help?: string;
  commands: Command[];
}
