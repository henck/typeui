import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ThemeConsumer } from 'styled-components';
import { IThemeInterface } from '../../styles/Theme';

// Other controls
import { PanelContainer } from './PanelContainer';
import { Content } from './Content';
import { Header } from './Header';
import { Footer } from './Footer';
import { IconPanel } from './IconPanel';

interface IPanelProps {
  children?: React.ReactNode;
  /** 
   * Is the Panel currently open? 
   * @default false
   */
  open?: boolean;
  /** 
   * Default Panel has a width of 200px, but this can be overridden. 
   * @default 200
   */
  width?: number;
  /** 
   * Does Panel have internal padding? There is no padding by default to allow content to fill the Panel completely. 
   * @default false
   */
  padded?: boolean;  
  /** 
   * If set, Panel does not perform animation. 
   * @default false
   */
  noanimation?: boolean;
  /** 
   * This callback is called when the user closes the Panel. The caller is supposed to close the Panel. 
   */
  onClose?: () => void;  
}

interface IPanelState {
  /** Anchor to base panel body positioning on. */
  anchor: HTMLDivElement
}

/**
 * Note that a panel determines its position from the position of its direct parent. 
 * The parent therefore must have position: relative.
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-panel--properties
 */
class Panel extends React.Component<IPanelProps, IPanelState> {
  public static Header = Header;
  public static Content = Content;
  public static Footer = Footer;

  /**
   * The Panel.Icon component is a shortcut to building a Panel that opens when an
   * Icon is clicked. Note that the Panel.Icon must still be placed inside a container
   * that is relatively positioned, and that the only way to close the panel is to click
   * outside it.
   * 
   * An icon can be passed as an icon type, or as a collection of icon properties.
   */
  public static Icon = IconPanel;

  private panelElement: HTMLDivElement;

  constructor(props: IPanelProps) {
    super(props);
    this.state = {
      anchor: null
    }
  }

  // Listen for document-wide mousedown/keydown events when component mounts.
  componentDidMount() {
    this.setState({
      anchor: this.panelElement
    })
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  // Clean up document-wide mousedown/keydown events when component unmounts.
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  // Handle document-wide mousedown event by sending a panel close event.
  private handleClickOutside = (e: MouseEvent) => {
    let elem:Element = e.target as Element;
    if (this.panelElement && !this.panelElement.contains(elem) && this.props.open && this.props.onClose) {
      // A short timeout prevents the panel reopening immediately when its
      // trigger element is clicked.
      setTimeout(() => this.props.onClose(), 100);
    }
  }    

  private handleKeyDown = (e: KeyboardEvent) => {
    if(e.key == 'Escape') this.props.onClose();
  }

  render() {
    let p = this.props;
    return (
      <div ref={(el:any) => this.panelElement = el}>
        <ThemeConsumer>
          {(theme:IThemeInterface) => <CSSTransition in={p.open} timeout={theme.transition.duration*1000*3} appear unmountOnExit classNames="fade">
            <PanelContainer anchor={this.state.anchor} noanimation={p.noanimation} padded={p.padded} width={p.width}>{p.children}</PanelContainer>
          </CSSTransition>}
        </ThemeConsumer>
      </div>
    );
  }
}

export { Panel };
