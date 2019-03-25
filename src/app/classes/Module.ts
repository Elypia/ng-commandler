import {Command} from './Command';

export class Module {
  name: string;
  group: string;
  aliases: string[];
  help: string;
  commands: Command[];
}
