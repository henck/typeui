import * as React from 'react';
import styled from '../../styles/Theme';

// Helpers
import { lighten } from '../../helper/lighten';

interface IErrorProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * If true, error messages have more contrast for readability on a dark 
   * background. 
   * @default false
   */
  contrast?: boolean;
}

const ErrorBase = (props: IErrorProps) =>
  <div className={props.className}>{props.children}</div>

const Error = styled(ErrorBase)`
  font-size: 80%;
  line-height: 1.4em;
  color: ${p => p.contrast ? lighten(0.3, p.theme.errorColor.color) : p .theme.errorColor.color};
  padding-top: 4px;
  padding-left: 4px;
`;

export { Error }
