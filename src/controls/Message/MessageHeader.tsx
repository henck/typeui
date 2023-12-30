import * as React from 'react';
import styled from '../../styles/Theme';

interface IMessageHeaderProps {
  /** @ignore */
  className?: string;
  /** @ignore */  
  children?: React.ReactNode;
}

const MessageHeaderBase = (props: IMessageHeaderProps) =>
  <div className={props.className}>{props.children}</div>

const MessageHeaderStyled = styled(MessageHeaderBase)`
  font-weight: 500;
  font-size: 115%;
`;

const MessageHeader = (props: IMessageHeaderProps) => <MessageHeaderStyled {...props}/>

export { MessageHeader, IMessageHeaderProps }
