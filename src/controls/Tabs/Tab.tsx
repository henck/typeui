import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface ITabProps {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  underlined?: boolean;
  setRef?: any;
  onClick?: any;
}

class TabBase extends React.Component<ITabProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className} ref={p.setRef} onClick={p.onClick}>
        {p.children}
      </div>
    )
  }
}

const Tab = styled(TabBase)`
  display: table-cell;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0 20px;
  font-size: 0.875em;
  box-sizing: border-box;
  height: 40px;
  z-index: 1;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;

  /* User cannot select header text.
   * This prevents accidental selection when clicking the tab.
   */
  user-select: none;  

  ${p => p.active && css`
    opacity: 1.0;
    font-weight: 500;
    ${!p.underlined && css`
      padding: 0 19px;
      border: solid 1px rgba(35, 35, 35, 0.15);
      border-bottom: solid 1px #ffffff;
      border-top-left-radius: ${p.theme.radius}px;
      border-top-right-radius: ${p.theme.radius}px;
    `}
  `}
`

export { Tab };