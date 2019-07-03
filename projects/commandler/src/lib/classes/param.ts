export interface Param {

  /** The name of this parameter. */
  name: string;

  /** The help string for this parameter if one is set. */
  help?: string;

  /** If parameter can take multiple items at once. */
  list: boolean;

  /** If this parameter is required, or has an default value. */
  required: boolean;
}
