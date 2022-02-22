import * as React from 'react';

// Other controls
import { Icon, IIconProps } from '../Icon/Icon';

class ListIcon extends React.Component<IIconProps> {
  render = () => {
    let { className, ...other} = this.props;

    return (
      <div className={className}>
        <Icon {...other}/>
      </div>
    )
  }  
}

export { ListIcon };