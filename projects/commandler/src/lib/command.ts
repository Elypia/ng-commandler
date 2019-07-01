import {Param} from './param';

// TODO: Example data
export interface Command {
  name: string;
  aliases: string[];
  help?: string;
  default: boolean;
  static: boolean;
  params: Param[];
  minParams: number;
  maxParams: number;
}
