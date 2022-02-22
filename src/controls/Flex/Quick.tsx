import * as React from 'react';
import styled from '../../styles/Theme';

// Types
import { VerticalAlignment } from '../Types';

interface IQuickProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
  /** 
   * Flex vertical alignment of \`top\`, \`center\` or \`bottom\`. By default, 
   * 'center' is used. 
   * @default center
   */
  align?: VerticalAlignment;
}

class QuickBase extends React.Component<IQuickProps, {}> {
  render = () => <div className={this.props.className}>{this.props.children}</div>
}

const QuickStyled = styled(QuickBase)`
  display: flex;
  align-items: ${p => p.align || 'center'};
  & > * {
    margin-right: 4px;
  }
`;

class Quick extends React.Component<IQuickProps, {}> {
  render = () => <QuickStyled {...this.props}/>
}

export { Quick };