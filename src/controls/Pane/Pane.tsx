import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Other controls
import { Icon } from '../Icon/Icon';
import { IconPane } from './IconPane';

interface IPaneProps {
  className?: string;
  children?: React.ReactNode;
  /** Is the Pane currently open? */
  open: boolean;
  /** This callback is called when the Pane requests to close. */
  onClose: () => void;
  /** A padded Pane adds padding to its content. */
  padded?: boolean;
  /** Override default Pane width of 400 pixels. */
  width?: number;
}

class PaneBase extends React.Component<IPaneProps, {}> {
  private paneElement: HTMLDivElement;

  constructor(props: IPaneProps) {
    super(props);
  }

  // Listen for document-wide mousedown event when component mounts.
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  // Clean up document-wide mousedown event when component unmounts.
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
  }
  
  // Handle document-wide mousedown event by sending a pane close event.
  handleClickOutside(event: MouseEvent) {
    let elem:Element = event.target as Element;
    if (this.props.open && this.paneElement && !this.paneElement.contains(elem) && this.props.onClose) {
      this.props.onClose();
    }
  } 

  render() {
    let p = this.props;
    return (
      <div className={p.className} ref={(el:any) => this.paneElement = el}>
        <Iconholder>
          <Icon size="large" name="times" onClick={p.onClose}/>
        </Iconholder>
        {p.children}
      </div>
    );
  }
}

const Iconholder = styled('div')`
  position: absolute;
  right: 10px;
  top: 10px;
`

const PaneStyled = styled(PaneBase)`
  position: fixed;
  z-index: 2000;
  right: -${p => p.width ? (p.width + 50) : 450}px;
  width: ${p => p.width ? p.width : 400}px;
  top: 0;
  height: 100%;

  /* Undo parent text alignment */
  text-align: left;

  /* Add padding if set in props */
  padding: ${p => p.padded ? '16px': '0'};

  background: #fff;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
  transition: right ${p => p.theme.transition.duration*4}s ease;
  ${p => p.open && css`
    right: 0;
  `}
`

class Pane extends React.Component<IPaneProps, {}> {
  public static displayName = 'Pane';
  public static Icon = IconPane;

  render() {
    return (
      <PaneStyled {...this.props}></PaneStyled>
    );
  }
}

(Pane.Icon as any).displayName = "Pane.Icon";

export { Pane };
