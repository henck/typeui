import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IRowProps {
  className?: string;
  children?: React.ReactNode;
  upwards?: boolean;
  onClick?: any;
}

class RowBase extends React.Component<IRowProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className} onClick={p.onClick}>{p.children}</div>
    );
  }
}

const Row = styled(RowBase)`
  /* Entire row is clickable: */
  cursor: pointer;

  /* Cells are flex-aligned: */
  display: flex;

  /* Row has a top border if it's not the first child. 
   * That means the first row *will* get a top border if there is 
   * a search input box above it. */
  ${p => p.upwards && css`
    border-bottom: solid 1px ${p.theme.normalColor};
  `}
  ${p => !p.upwards && css`
    border-top: solid 1px ${p.theme.normalColor};
  `}

  /* Background color on hover: */
  transition: background-color ${p => p.theme.transition.duration}s ease;
  &:hover {
    background: ${p => p.theme.normalColor};
  }
`;

export { Row };