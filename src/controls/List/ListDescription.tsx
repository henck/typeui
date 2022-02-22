import * as React from 'react';

interface IListDescriptionProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
}

class ListDescription extends React.Component<IListDescriptionProps> {
  render = () => <div className={this.props.className}>{this.props.children}</div>
}

export { ListDescription };