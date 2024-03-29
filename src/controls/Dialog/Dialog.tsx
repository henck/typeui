import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

// Other controls
import { DialogBackground } from './DialogBackground';
import { DialogWindow } from './DialogWindow';
import { DialogHeader } from './DialogHeader';
import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { AlertDialog } from './AlertDialog';
import { ConfirmDialog } from './ConfirmDialog';
import { XhrDialog } from './XhrDialog';

interface IDialogProps {
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Is the Dialog currently open? 
   * @default false
   */
  open?: boolean;
  /** 
   * This optional callback is called when the user closes the Dialog 
   * window.
   * @default null
   */
  onClose?: () => void;
  /**
   * Override standard dialog width of 600 pixels (large screens) or 
   * 400 pixels (small screens). 
   * @default 600
   */
  width?: number;
  /** 
   * If set to false, then the Dialog cannot be closed by clicking 
   * outside of it. This is helpful when a Dialog is executing an 
   * asynchronous task and must remain open while doing so.
   * @default true
   */
  canClose?: boolean;
}

/**
 * A Dialog is an overlay window that is triggered when the Dialog’s open attribute 
 * is set to true. The calling code is responsible for setting open to false when the 
 * Dialog should close. The Dialog also calls onClose when the user clicks outside the 
 * Dialog.
 * 
 * @example
 * <Button onClick={this.handleClick}>Open dialog</Button>
 * <Dialog open={this.state.open} onClose={this.handleClose}>
 *   <Dialog.Header>Welcome</Dialog.Header>
 *   <Dialog.Content>Good day!</Dialog.Content>
 *   <Dialog.Footer>
 *     <Button onClick={this.handleOK}>OK</Button>
 *   </Dialog.Footer>
 * </Dialog>      
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-dialog--properties
 */
class Dialog extends React.Component<IDialogProps, {}> {
  private windowElement: HTMLDivElement;

  /**
   * Dialog.Header contains dialog header content.
   */
  public static Header = DialogHeader;

  /**
   * Dialog.Content contains main dialog body content.
   */
  public static Content = DialogContent;

  /**
   * Dialog.Footer contains dialog footer content.
   */
  public static Footer = DialogFooter;

  /**
   * The Dialog component offers a pre-built Dialog.Alert type, with an "OK" button. 
   * The caller provides a title, and any JSX inside the component is used as dialog content.
   */
  public static Alert = AlertDialog;

  /**
   * The Dialog component offers a pre-built Dialog.Confirm type, with a "Yes" and a "No"
   * button. The caller provides a title, and any JSX inside the component is used as dialog 
   * content.
   */
  public static Confirm = ConfirmDialog;

  /**
   * The Dialog component offers a pre-built Dialog.Xhr type, with an "OK" and a "Retry" 
   * button. This dialog can be used when an XHR request fails. It takes an error attribute 
   * with an Axios response object, and reports it to the user.
   */
  public static Xhr = XhrDialog;  

  // Listen for document-wide mousedown event when component mounts.
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  // Clean up document-wide mousedown event when component unmounts.
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  
  // Handle document-wide mousedown event by sending a dialog close event.
  // When clicking outside of it, a Dialog can close only if its canClose
  // prop is not set to false.
  handleClickOutside = (event: MouseEvent) => {
    let elem:Element = event.target as Element;
    if (this.windowElement && !this.windowElement.contains(elem) && this.props.onClose && this.props.canClose !== false) {
      this.props.onClose();
    }
  }  
  
  // For use of CSSTransition, see:
  // http://reactcommunity.org/react-transition-group/css-transition
  // and 
  // https://veerasundar.com/blog/2018/12/how-to-animate-page-transition-in-react-using-styled-components/
  render() {
    let p = this.props;
    // CSS Transition mounts dialog when it is open. When it's closed, 
    // a Dialog does not appear in the DOM at all.
    return (
      <>
        <CSSTransition in={p.open} timeout={300} unmountOnExit classNames="fade">          
          <DialogBackground/>
        </CSSTransition>
        <CSSTransition in={p.open} timeout={300} unmountOnExit classNames="fade">
          <DialogWindow width={p.width} windowRef={(el:any) => this.windowElement = el}>
            {p.children}
          </DialogWindow>
        </CSSTransition>
      </>
    );
  }
}

export { Dialog };


