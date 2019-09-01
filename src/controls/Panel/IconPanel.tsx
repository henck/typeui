import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Other controls
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconType';
import { Panel } from './Panel';

interface IIconPanelProps {
  className?: string;
  children?: React.ReactNode;
  icon: IconType;
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
    return (
      <React.Fragment>
        <Icon name={p.icon} onClick={this.handleOpenPanel}/>
        <Panel open={this.state.open} width={p.width} padded={p.padded} onClose={this.handleClosePanel}>
          {p.children}
        </Panel>
      </React.Fragment>
    );
  }
}

export { IconPanel };
