import * as React from 'react';
import styled from '../../styles/Theme';

interface IMessageHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

class MessageHeaderBase extends React.Component<IMessageHeaderProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

const MessageHeaderStyled = styled(MessageHeaderBase)`
  font-weight: 500;
  font-size: 115%;
`;

class MessageHeader extends React.Component<IMessageHeaderProps, {}> {
  public static displayName = "Message.Header";
  
  render() {
    let p = this.props;
    return (
      <MessageHeaderStyled {...p}/>
    )
  }  
}

export { MessageHeader };