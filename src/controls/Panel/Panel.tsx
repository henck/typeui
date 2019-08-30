import * as React from 'react';
import { PanelContainer } from './PanelContainer';
import { CSSTransition } from 'react-transition-group';
import { Content } from './Content';
import { Header } from './Header';
import { Footer } from './Footer';

interface IPanelProps {
  children?: React.ReactNode;
  /** Is the panel currently open? */
  open?: boolean;
  /** This callback is called when the user closes the panel. The caller is supposed to close the panel. */
  onClose?: any;  
  /** Does panel have a fixed width? */
  width?: number;
  /** Does panel have internal padding? */
  padded?: boolean;  
}

interface IPanelState {
  /** Anchor to base panel body positioning on. */
  anchor: HTMLDivElement
}

class Panel extends React.Component<IPanelProps, IPanelState> {
  public static displayName = "Panel";
  public static Header = Header;
  public static Content = Content;
  public static Footer = Footer;

  private panelElement: HTMLDivElement;

  constructor(props: IPanelProps) {
    super(props);
    this.state = {
      anchor: null
    }
  }

  // Listen for document-wide mousedown event when component mounts.
  componentDidMount() {
    this.setState({
      anchor: this.panelElement
    })
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  // Clean up document-wide mousedown event when component unmounts.
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  // Handle document-wide mousedown event by sending a panel close event.
  handleClickOutside(e: MouseEvent) {
    let elem:Element = e.target as Element;
    if (this.panelElement && !this.panelElement.contains(elem) && this.props.open && this.props.onClose) {
      // A short timeout prevents the panel reopening immediately when its
      // trigger element is clicked.
      setTimeout(() => this.props.onClose(), 100);
    }
  }    

  render() {
    let p = this.props;

    return (
      <div ref={(el:any) => this.panelElement = el}>
        <CSSTransition in={p.open} timeout={300} unmountOnExit classNames="fade">
          <PanelContainer anchor={this.state.anchor} padded={p.padded} width={p.width}>{p.children}</PanelContainer>
        </CSSTransition>
      </div>
    );
  }
}

export { Panel };
