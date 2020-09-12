import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IPanelBodyProps {
  className?: string;
  children?: React.ReactNode;
  /** Is body above the parent element? */
  above: boolean;
  /** Is body right-aligned to the parent element? */
  right: boolean;
  /** Arrow offset in pixels */
  offset: number;
  /** Override default panel width of 200 pixels */
  width?: number;
  /** Does panel have internal padding? */
  padded?: boolean;
}

class PanelBodyBase extends React.Component<IPanelBodyProps, {}> {

  private handleClick = (e: React.MouseEvent) => {
    // Handle all mouse clicks on panel body to prevent them
    // from reaching the parent component (and reopening the panel).
    e.stopPropagation();
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className} onClick={this.handleClick}>
        {p.children}
      </div>
    );
  }
}

const PanelBody = styled(PanelBodyBase)`
  /* Document position */
  position: absolute;
  z-index:  99;

  /* Undo text alignment set by parent element. */
  text-align: left;

  /* Undo cursor set by parent element. */
  cursor: default;

  /* Dimensions */
  min-width: 200px;
  ${p => p.width && css`width: ${p.width}px;`}
  ${p => p.padded && css`padding: 16px;`}
  margin:    1em 0;

  /* Horizontal positioning */
  ${p => p.right && css`left: 0;`}
  ${p => !p.right && css`right: 0;`}     

  ${p => p.above && css`bottom: 100%;`}
  ${p => !p.above && css`top: 100%;`}    

  /* Vertical positioning with transition. */
  ${p =>  p.above && !p.right && css`transform-origin: right bottom;`} 
  ${p =>  p.above &&  p.right && css`transform-origin: left bottom;`} 
  ${p => !p.above && !p.right && css`transform-origin: right top;`} 
  ${p => !p.above &&  p.right && css`transform-origin: left top;`} 
  transition: opacity ${p => p.theme.transition.duration*3}s ease-out, 
              top ${p => p.theme.transition.duration*3}s ease-out, 
              bottom ${p => p.theme.transition.duration*3}s ease-out, 
              transform ${p => p.theme.transition.duration*3}s ease-out;

  &.fade-enter {
    opacity: 0.01;
    transform: scaleX(0.01) scaleY(0.01);
    ${p => p.above && css`bottom: 0;`}
    ${p => !p.above && css`top: 0;`}    
  }
  &.fade-enter-active {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
    ${p => p.above && css`bottom: 100%;`}
    ${p => !p.above && css`top: 100%;`}    
  }
  &.fade-exit {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
    ${p => p.above && css`bottom: 100%;`}
    ${p => !p.above && css`top: 100%;`}    
  }
  &.fade-exit-active {
    opacity: 0.01;
    transform: scaleX(0.01) scaleY(0.01);
    ${p => p.above && css`bottom: 0;`}
    ${p => !p.above && css`top: 0;`}    
  }

  /* Colors */
  background: #fff;
  border: solid 1px ${p => p.theme.normalColor};
  border-radius: ${p => p.theme.radius}px;
  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;

  /* Arrows */
  &:before {
    content: '';
    position: absolute;
    width: 0.6em;
    height: 0.6em;
    border-style: inherit;
    border-color: inherit;
    background: inherit;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    ${p => !p.right && css`right: calc(${p.offset}px - 0.6em);`}
    ${p =>  p.right && css`left: calc(${p.offset}px - 0.6em);`}
  }
  /* Pointing to top: */
  ${p => !p.above && css`
    &:before {
      top: -1px;
      border-width: 1px 0 0 1px;
    }
  `}
  /* Pointing to bottom: */
  ${p => p.above && css`
    &:before {
      margin-top: 1px;
      top: 100%;
      border-width: 0 1px 1px 0;
    }
  `}    
`

export { PanelBody };
