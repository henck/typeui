import * as React from 'react';
import styled from '../../styles/Theme';

interface IMessageHeaderProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
}

class MessageHeaderBase extends React.Component<IMessageHeaderProps> {
  render = () => <div className={this.props.className}>{this.props.children}</div>
}

const MessageHeaderStyled = styled(MessageHeaderBase)`
  font-weight: 500;
  font-size: 115%;
`;

class MessageHeader extends React.Component<IMessageHeaderProps> {
  render = () => <MessageHeaderStyled {...this.props}/>
}

export { MessageHeader };
