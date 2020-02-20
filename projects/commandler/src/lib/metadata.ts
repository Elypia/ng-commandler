import {SocialLink} from './social-link';

export interface Metadata {

  /** The name of the Commandler application. */
  name?: string;

  /** A URL to the logo of the application. */
  logo?: string;

  /** An array of social links belonging to the owner of the application. */
  socialLinks?: SocialLink[];
}
