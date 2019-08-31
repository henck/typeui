import * as React from 'react';
import { DialogBackground } from './DialogBackground';
import { DialogWindow } from './DialogWindow';
import { DialogHeader } from './DialogHeader';
import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { ConfirmDialog } from './ConfirmDialog';
import { XhrDialog } from './XhrDialog';
import { CSSTransition } from 'react-transition-group';

interface IDialogProps {
  children?: React.ReactNode;
  /** Is the dialog currently open? */
  open?: boolean;
  /** This callback is called when the user closes the dialog window. */
  onClose?: () => void;
  /** Override standard dialog width of 600 pixels. */
  width?: number;
}

class Dialog extends React.Component<IDialogProps, {}> {
  private windowElement: HTMLDivElement;
  public static Header = DialogHeader;
  public static Content = DialogContent;
  public static Footer = DialogFooter;
  public static Confirm = ConfirmDialog;
  public static Xhr = XhrDialog;  

  // Listen for document-wide mousedown event when component mounts.
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  // Clean up document-wide mousedown event when component unmounts.
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
  }
  
  // Handle document-wide mousedown event by sending a dialog close event.
  handleClickOutside(event: MouseEvent) {
    let elem:Element = event.target as Element;
    if (this.windowElement && !this.windowElement.contains(elem) && this.props.onClose) {
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
      <React.Fragment>
        <CSSTransition in={p.open} timeout={300} unmountOnExit classNames="fade">          
          <DialogBackground/>
        </CSSTransition>
        <CSSTransition in={p.open} timeout={300} unmountOnExit classNames="fade">
          <DialogWindow width={p.width} windowRef={(el:any) => this.windowElement = el}>
            {p.children}
          </DialogWindow>
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export { Dialog };


