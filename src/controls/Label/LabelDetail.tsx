import * as React from 'react';
import styled from '../../styles/Theme';

interface ILabelDetailProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
}

class LabelDetailBase extends React.Component<ILabelDetailProps> {
  render = () => <span className={this.props.className}>{this.props.children}</span>
}

const LabelDetailStyled = styled(LabelDetailBase)`
  opacity: 0.7;
  margin-left: 0.6em;
`;

class LabelDetail extends React.Component<ILabelDetailProps> {
  render = () => <LabelDetailStyled {...this.props}/>
}

export { LabelDetail };