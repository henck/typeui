import * as React from 'react';
import styled from '../../styles/Theme';
import { keyframes, css } from 'styled-components';

interface IHeadProps {
  className?: string;
  children?: any;
  loading: boolean;
}

// HeaderInner is used to get rid of the scrollbar in
// the Head. It is replaced with whitespace.
// https://stackoverflow.com/a/49278385/1266190
const HeadInner = styled.div`
  display: flex;
  margin-right: -999px;
  padding-right: 999px;
  overflow-y: scroll;
`

class HeadBase extends React.Component<IHeadProps, {}> {
  public static displayName = "DataTable.Column";
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        <HeadInner>
          {p.children}
        </HeadInner>
      </div>
    )
  }
}

const moveLoader = keyframes`
  0%   { max-width: 0; }
  50%  { max-width: 100%; }
  100% { max-width: 0; }
`;

const Head = styled(HeadBase)`
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  border-bottom: solid 1px ${p => p.theme.normalColor};

  /* Prevent user text selection. */
  user-select: none;

  /* Show a loading animation when table data is loading. */
  ${p => p.loading && css`
    &:after {
      position: absolute;
      z-index: 1;
      content: '';
      left: 0;
      bottom: -1px;
      width: 100%;
      max-width: 0;
      height: 2px;
      background: ${p => p.theme.primaryColor};
      animation: ${moveLoader} 5s linear;
    }
  `}
`;


export { Head }
