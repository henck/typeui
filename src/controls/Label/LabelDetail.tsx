import * as React from 'react';
import styled from '../../styles/Theme';

/**
 * A LabelDetail is a small detail (usually with a number in it) 
 * that floats on the top-right corner of a label.
 */

interface ILabelDetailProps {
  className?: string;
  children?: React.ReactNode;
}

class LabelDetailBase extends React.Component<ILabelDetailProps, {}> {
  render() {
    let p = this.props;
    return (
      <span className={p.className}>{p.children}</span>
    );
  }  
}

const LabelDetailStyled = styled(LabelDetailBase)`
  opacity: 0.7;
  margin-left: 0.6em;
`;

class LabelDetail extends React.Component<ILabelDetailProps, {}> {
  render() {
    let p = this.props;
    return (
      <LabelDetailStyled {...p}/>
    )
  }  
}

export { LabelDetail };