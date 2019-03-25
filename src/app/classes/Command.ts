import {Parameter} from './Parameter';

export class Command {
  name: string;
  aliases: string[];
  help: string;
  parameters: Parameter[];
  example: string;
}
