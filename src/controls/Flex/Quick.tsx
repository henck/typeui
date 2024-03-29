import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Types
import { VerticalAlignment } from '../Types';

interface IQuickProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Flex vertical alignment of \`top\`, \`center\` or \`bottom\`. By default, 
   * 'center' is used. 
   * @default center
   */
  align?: VerticalAlignment;
  /** Optional flex gap (as a string, e.g. "8px"). */
  gap?: string;
}

const QuickBase = (props: IQuickProps) =>
  <div className={props.className}>{props.children}</div>

const QuickStyled = styled(QuickBase)`
  display: flex;
  ${p => p.gap && css`
    gap: ${p.gap};
  `}
  align-items: ${p => p.align || 'center'};
  & > * {
    margin-right: 4px;
  }
`;

const Quick = (props: IQuickProps) => <QuickStyled {...props}/>

export { Quick, IQuickProps }
