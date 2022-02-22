import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Other controls
import { Toast } from './Toast';
import { ToastService, IToastSubscriber } from './ToastService';

interface IToastContainerProps {
  /** @ignore */
  className?: string;
  /** 
   * Maximum number of toasts on-screen at the same time. 
   */
  maxToasts: number;
}

interface IMessage {
  message: React.ReactNode;
  duration?: number;
}

interface IToastContainerState {
  messages: {[key:string]: IMessage };
}

class ToastContainerBase extends React.Component<IToastContainerProps, IToastContainerState> implements IToastSubscriber {
  constructor(props: IToastContainerProps) {
    super(props);
    ToastService.subscribe(this);
    this.state = {
      messages: {}
    };
  }

  // Add a new toast. This is called by ToastService.
  public toast(message: React.ReactNode, duration?: number) {
    this.setState((prevState) => {
      let messages = prevState.messages;
      // Remove excess messages:
      while(Object.keys(messages).length >= this.props.maxToasts) {
        delete messages[Object.keys(messages)[0]];
      }
      // Create new message:
      let key = new Date().getTime().toString();
      messages[key] = {
        message: message,
        duration: duration
      };
      // Set new state:
      return {
        messages: messages
      }
    });
  }

  private handleTimeout = (key:string) => {
    // Remove messsage by key:    
    this.setState((prevState) => {
      let messages = prevState.messages;
      delete messages[key];
      return {
        messages: messages
      }
    });    
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        <TransitionGroup>
          {Object.keys(this.state.messages).map((key) => 
            <CSSTransition key={key} timeout={500} classNames="item">
              <Toast message={this.state.messages[key].message} duration={this.state.messages[key].duration} onTimeout={() => this.handleTimeout(key)}/>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
}

const ToastContainerStyled = styled(ToastContainerBase)`
  /* Toasts are placed in the bottom-left corner. */
  position: absolute;
  z-index: 9999;
  left: 20px;
  bottom: 20px;
`

class ToastContainer extends React.Component<IToastContainerProps> {
  render = () =><ToastContainerStyled {...this.props}/>
}

export { ToastContainer };