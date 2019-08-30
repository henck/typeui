import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IBoxProps {
  className?: string;
  children?: React.ReactNode;
  color?: string;
}

class BoxBase extends React.Component<IBoxProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

const Box = styled(BoxBase)`
  display: block;
  padding: 30px;
  text-align: center;
  border-radius: 2px;
  ${p => !p.color && css`background: pink;`}
  ${p => p.color && css`background: ${p.color};`}
`;

Box.displayName = "Box";

export { Box };