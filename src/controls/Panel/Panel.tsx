import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

// Other controls
import { PanelContainer } from './PanelContainer';
import { Content } from './Content';
import { Header } from './Header';
import { Footer } from './Footer';
import { IconPanel } from './IconPanel';

interface IPanelProps {
  children?: React.ReactNode;
  /** Is the Panel currently open? */
  open?: boolean;
  /** This callback is called when the user closes the Panel. The caller is supposed to close the Panel. */
  onClose?: () => void;  
  /** Default Panel has a width of 200px, but this can be overridden. */
  width?: number;
  /** Does Panel have internal padding? There is no padding by default to allow content to fill the Panel completely. */
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
  public static Icon = IconPanel;

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

(Panel.Header as any).displayName = "Panel.Header";
(Panel.Content as any).displayName = "Panel.Content";
(Panel.Footer as any).displayName = "Panel.Footer";
(Panel.Icon as any).displayName = "Panel.IconPanel";

export { Panel };
