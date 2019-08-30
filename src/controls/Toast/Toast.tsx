import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { Icon } from '../Icon';

interface IToastProps {
  className?: string;
  message: React.ReactNode;
  /** Toast duration in ms. Default is 8000ms */
  duration?: number;
  /** Timeout callback, called when the Toast self-closes. */
  onTimeout: () => void;
};

/**
 * Toasts can be clicked to self-close. Otherwise they self-close
 * after a duration in milliseconds.
 */
class ToastBase extends React.Component<IToastProps, {}> {
  private timerHandle: number;

  constructor(props: IToastProps) {
    super(props);
    // Set a timeout on the toast, saving the
    // timer handle for later cleanup.
    this.timerHandle = window.setTimeout(() => {
      this.props.onTimeout();
    }, this.props.duration ? this.props.duration : 8000);
  }

  // Clear any running timer:
  componentWillUnmount() {
    window.clearTimeout(this.timerHandle);
  }

  private handleClick = () => {
    this.props.onTimeout();
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className} onClick={this.handleClick}>
        <Icon name="bullhorn" color="#fff"/>
        <div>
          {p.message}
        </div>
      </div>
    )
  }
}

const Toast = styled(ToastBase)`
  display: flex;
  align-items: flex-start;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: ${p => p.theme.radius}px;
  margin-top: 8px;
  cursor: pointer;

  & > ${Icon} {
    margin-right: 10px;
  }

  /* CSSTransition classes */
  &.item-enter {
    opacity: 0;
    transform: translateX(-150%);
  }
  &.item-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${p => p.theme.transition.duration*3}s ease-in-out, 
                transform ${p => p.theme.transition.duration*3}s ease-in-out;
  }
  &.item-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.item-exit-active {
    opacity: 0;
    transform: translateX(-150%);
    transition: opacity ${p => p.theme.transition.duration*3}s ease-in-out, 
                transform ${p => p.theme.transition.duration*3}s ease-in-out;
  }  
`;

export { Toast };