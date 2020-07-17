import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Other controls
import { Icon, IIconProps } from '../Icon/Icon';
import { IconType } from '../Icon/IconType';
import { Panel } from './Panel';

interface IIconPanelProps {
  className?: string;
  children?: React.ReactNode;
  icon: IconType | IIconProps;
  /** A padded pane adds padding to its content. */
  padded?: boolean;
  /** Override default panel width of 200 pixels */
  width?: number;
}

interface IState {
  open: boolean;
}

class IconPanel extends React.Component<IIconPanelProps, IState> {
  constructor(props: IIconPanelProps) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpenPanel = () => {
    this.setState({
      open: true
    })
  }

  handleClosePanel = () => {
    this.setState({
      open: false
    })
  }    

  render() {
    let p = this.props;

    let icon = null;
    // An icon can be passed either as an IconType...
    if(typeof p.icon === "string") {
      icon = (<Icon name={p.icon} onClick={this.handleOpenPanel}></Icon>)
    } 
    // ... or as IIconProps.
    else if (p.icon != null) {
      icon = (<Icon {...p.icon} onClick={this.handleOpenPanel}></Icon>)
    }    

    return (
      <React.Fragment>
        {icon}
        <Panel open={this.state.open} width={p.width} padded={p.padded} onClose={this.handleClosePanel}>
          {p.children}
        </Panel>
      </React.Fragment>
    );
  }
}

export { IconPanel };
