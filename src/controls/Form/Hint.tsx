import * as React from 'react';
import styled from '../../styles/Theme';

interface IFormHintProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
}

class HintBase extends React.Component<IFormHintProps, {}> {
  render = () =><div className={this.props.className}>{this.props.children}</div>
}

const Hint = styled(HintBase)`
  font-size: 80%;
  line-height: 1.4em;
  color: #aaa;
  padding-top: 4px;
  padding-left: 4px;
`;

export { Hint }
