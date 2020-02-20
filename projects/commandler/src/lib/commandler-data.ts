import {Metadata} from './metadata';

export interface Activator {
  name: string;
  value: string;
}

export interface Param {

  /** The name of this parameter. */
  name: string;

  /** The description string for this parameter if one is set. */
  description?: string;

  /** If parameter can take multiple items at once. */
  list: boolean;

  /** If this parameter is required, or has an default value. */
  required: boolean;
}

export interface Command {
  name: string;
  description?: string;
  default: boolean;
  static: boolean;
  activator: Activator[];
  params: Param[];
}

export interface Controller {
  group: string;
  name: string;
  description?: string;
  activator: Activator[];
  commands: Command[];
}

export interface CommandlerData {
  metadata: Metadata;
  controllers: Controller[];
}


