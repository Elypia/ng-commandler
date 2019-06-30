import {Param} from './param';

// TODO: Example data
export interface Command {
  name: string;
  aliases: string[];
  help?: string;
  default: boolean;
  static: boolean;
  parameters: Param[];
  minParams: number;
  maxParams: number;
}
