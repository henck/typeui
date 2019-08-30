import * as React from 'react';
import styled from '../../styles/Theme';

interface IDialogBackgroundProps {
  className?: string;
}

class DialogBackgroundBase extends React.Component<IDialogBackgroundProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}></div>
    );
  }
}

const DialogBackground = styled(DialogBackgroundBase)`
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.5;

  /* CSSTransition classes */
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
  &.fade-exit {
    opacity: 0.5;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 0.3s ease;
  }  
`

DialogBackground.displayName = "DialogBackground";

export { DialogBackground };
