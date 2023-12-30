import * as React from 'react';

// Types
import { Size } from '../Types';

// Helpers
import { md5 } from '../../helper/md5';

// Other controls
import { Image } from '../Image/Image';

interface IGravatarProps {
  /** @ignore */
  className?: string;
  /** Email address to use for Gravatar. If not specified, shows default unknown user image. */
  email?: string;
  /** 
   * Gravatar image size. If not specified, uses `avatar`. 
   * @default avatar 
   */
  size?: Size;
  /** onClick handler, if any. */
  onClick?: () => void;
}

/**
 * A Gravatar shows a generated image based on an email address, as provided by the gravatar service. 
 * 
 * @example
 * <Gravatar email="john.smith@email.com"/>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-gravatar--properties
 */
const Gravatar = (props: IGravatarProps) =>
  <Image
    avatar={!props.size} size={props.size} bordered circular 
    onClick={props.onClick}
    src={props.email 
        ? `https://www.gravatar.com/avatar/${md5(props.email.toLowerCase().trim())}?d=mp&r=g`
        : `https://www.gravatar.com/avatar/?d=mp&r=g&f=y`}
  />

export { Gravatar }
