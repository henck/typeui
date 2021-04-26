import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Other controls
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconType';
import { Pane } from './Pane';

interface IIconPaneProps {
  className?: string;
  children?: React.ReactNode;
  /** Pane activation icon. */
  icon: IconType;
  /** A padded pane adds padding to its content. */
  padded?: boolean;
  /** Override default pane width of 400 pixels. */
  width?: number;
}

interface IState {
  open: boolean;
}

class IconPane extends React.Component<IIconPaneProps, IState> {

  constructor(props: IIconPaneProps) {
    super(props);

    this.state = {
      open: false
    }
  }

  handleOpenPane = () => {
    this.setState({
      open: true
    })
  }

  handleClosePane = () => {
    this.setState({
      open: false
    })
  }    

  render() {
    let p = this.props;
    return (
      <>
        <Icon name={p.icon} onClick={this.handleOpenPane}/>
        <Pane open={this.state.open} width={p.width} padded={p.padded} onClose={this.handleClosePane}>
          {p.children}
        </Pane>
      </>
    );
  }
}

export { IconPane };
