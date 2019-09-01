import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Other controls
import { Icon, IIconProps } from '../Icon/Icon';

class ListIcon extends React.Component<IIconProps, {}> {
  render() {
    let { className, ...other} = this.props;

    return (
      <div className={className}>
        <Icon {...other}/>
      </div>
    )
  }  
}

export { ListIcon };