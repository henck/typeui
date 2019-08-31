import * as React from 'react';
import styled from '../../styles/Theme';
import { md5 } from '../../helper/md5';
import { Image } from '../Image';
import { Size } from '../Types';

interface IGravatarProps {
  className?: string;
  /** Email address to use for Gravatar. If not specified, shows default unknown user image. */
  email?: string;
  /** Gravatar image size. If not specified, uses `avatar`. */
  size?: Size;
  /** onClick handler, if any. */
  onClick?: () => void;
}

class Gravatar extends React.Component<IGravatarProps, {}> {
  render() {
    let p = this.props;
    return (
      <Image
        avatar={!p.size} size={p.size} bordered circular 
        onClick={p.onClick}
        src={p.email 
            ? `https://www.gravatar.com/avatar/${md5(p.email.toLowerCase().trim())}?d=mp&r=g`
            : `https://www.gravatar.com/avatar/?d=mp&r=g&f=y`}
      />
    );
  }
}

export { Gravatar };
