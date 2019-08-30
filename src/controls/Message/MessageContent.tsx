import * as React from 'react';

interface IMessageContentProps {
  className?: string;
  children?: React.ReactNode;
}

class MessageContent extends React.Component<IMessageContentProps, {}> {
  public static displayName = 'Message.Content';
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

export { MessageContent };