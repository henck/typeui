import * as React from 'react';
import styled from '../../styles/Theme';
import { lighten } from '../../helper/lighten';

interface IErrorProps {
  className?: string;
  children?: React.ReactNode;
  /** If true, error messages have more contrast for readability on a dark background. */
  contrast?: boolean;
}

class ErrorBase extends React.Component<IErrorProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

const Error = styled(ErrorBase)`
  color: ${p => p.contrast ? lighten(0.3, p.theme.errorColor.color) : p .theme.errorColor.color};
  font-size: 80%;
  line-height: 1.4em;
  padding-top: 4px;
  padding-left: 4px;
`;

export { Error };