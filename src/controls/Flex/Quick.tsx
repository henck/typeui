import * as React from 'react';
import styled from '../../styles/Theme';
import { VerticalAlignment } from '../Types';

interface IQuickProps {
  className?: string;
  children?: React.ReactNode;
  /** Flex vertical alignment of \`top\`, \`center\` or \`bottom\`. By default, 'center' is used. */
  align?: VerticalAlignment;
}

class QuickBase extends React.Component<IQuickProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

const QuickStyled = styled(QuickBase)`
  display: flex;
  align-items: ${p => p.align || 'center'};
  & > * {
    margin-right: 4px;
  }
`;

class Quick extends React.Component<IQuickProps, {}> {
  render() {
    let p = this.props;
    return (
      <QuickStyled {...p}/>
    )
  }  
}

export { Quick };