import * as React from 'react';

// Other controls
import { Icon, IIconProps } from '../Icon/Icon';

const ListIcon = (props: IIconProps) => {
  const { className, ...other} = props;
  return (
    <div className={className}>
      <Icon {...other}/>
    </div>
  )
}

export { ListIcon }
