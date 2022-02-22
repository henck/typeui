import * as React from 'react';

interface IMessageContentProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
}

class MessageContent extends React.Component<IMessageContentProps> {
  render = () => <div className={this.props.className}>{this.props.children}</div>
}

export { MessageContent };