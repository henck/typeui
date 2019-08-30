import * as React from 'react';
import styled from '../../styles/Theme';

interface IDialogWindowProps {
  className?: string;
  children?: React.ReactNode;
  windowRef?: any;
  width?: number;
}

class DialogWindowBase extends React.Component<IDialogWindowProps, {}> {
  render() {
    let p = this.props;
    return (
      <div 
        className={p.className}
        ref={p.windowRef}>
      {p.children}</div>
    );
  }
}

const DialogWindow = styled(DialogWindowBase)`
  position: fixed;
  z-index: 3000;
  left: 50%;
  top: 50%;
  transform-origin: center center;
  transform: translateX(-50%) translateY(-50%);
  border-radius: ${p => p.theme.radius}px;
  background: #fff;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);

  /* Dialog window width:
   * Narrower on small screen. */
  width: ${p => p.width ? p.width : 600}px;
  @media (max-width: ${p => p.theme.smallScreen}px) {
    width: ${p => p.width ? (p.width > 400 ? 400 : p.width) : 400}px;
  }

  /* CSSTransition classes: */
  &.fade-enter {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) scale(0.8);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(.17,.89,.35,1.67);
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) scale(0.8);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`

DialogWindow.displayName = "DialogWindow";

export { DialogWindow };
