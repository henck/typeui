import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface IPlaceholderHeaderProps {
  className?: string;
  children?: React.ReactNode;
  /** If true, header will contain a small image placeholder. */
  image?: boolean;
}

class PlaceholderHeaderBase extends React.Component<IPlaceholderHeaderProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

const PlaceholderHeaderStyled = styled(PlaceholderHeaderBase)`
  position: relative;
  background: transparent;
  border-top: solid 1px #fff;
  
  /* Separator between image and lines */
  ${p => p.image && css`
    margin-left: 54px;
    &:before {
      position: absolute;
      z-index: 1;
      content: '';
      left: -10px;
      top: -1px;
      bottom: 0;
      width: 10px;
      background: #fff;
    }
  `}

  /* White block under lines */
  padding-bottom: 12px;
  &:after {
    position: absolute;
    z-index: 1;
    content: '';
    left: 0;
    bottom: 0;
    height: 12px;
    right: 0;
    background: #fff;
  }
`;

class PlaceholderHeader extends React.Component<IPlaceholderHeaderProps, {}> {
  render() {
    let p = this.props;
    return (
      <PlaceholderHeaderStyled {...p}/>
    )
  }  
}

export { PlaceholderHeader };