import * as React from 'react';

interface IMessageContentProps {
  className?: string;
  children?: React.ReactNode;
}

class MessageContent extends React.Component<IMessageContentProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

export { MessageContent };