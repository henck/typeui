import * as React from 'react';

interface IMessageContentProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
}

const MessageContent = (props: IMessageContentProps) =>
  <div className={props.className}>{props.children}</div>

export { MessageContent, IMessageContentProps }
