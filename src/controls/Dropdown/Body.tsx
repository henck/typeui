import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Helpers
import { lighten } from '../../helper/lighten';

interface IBodyProps {
  className?: string;
  children?: React.ReactNode;
  /* Is the Dropdown currently open? */
  open: boolean;
  /** A Dropdown can open upwards, which affects its styles. */
  upwards: boolean;
  inline?: boolean;
}

class BodyBase extends React.Component<IBodyProps, {}> {
  render() { 
    let p = this.props;
    return (
      <div className={p.className}>
        {p.children}
      </div>
    )
  }
}

// maximum number of children before scrollbar is added.
const MAX_CHILDREN_SHOWN = 6;

const Body = styled(BodyBase).attrs(p => ({
  // Height is based on number of children, up to MAX_CHILDREN_SHOWN
  totalHeight: Math.min(React.Children.count(p.children), MAX_CHILDREN_SHOWN) * 57 + 1
}))`
  position:       absolute;
  z-index:        100;
  box-sizing:     border-box;
  width:          100%;
  overflow-x:     hidden;
  /* If there are more children than MAX_CHILDREN_SHOWN, 
     then the body content scrolls vertically. */
  overflow-y:     ${p => React.Children.count(p.children) > MAX_CHILDREN_SHOWN ? 'scroll' : 'hidden'};
  height:         1000px; /* We animate max-height based on child count. */

  /* Border is grey, unless error. */
  border:         solid 1px ${p => p.theme.normalColor};
  border-radius:  ${p => p.theme.radius}px;

  /* Background is white */
  background:     #fff;

  /* Dropbox can open upwards or downwards. This affects its
     positioning relative to the parent. */
  ${p => p.upwards && css`
    bottom: calc(100% - 1px);
    /* Box-shadow is only at top(spread = -1px). */
    box-shadow:     rgba(34, 36, 38, 0.2) 0 -2px 2px -1px;    
    ${!p.inline && css`
      border-bottom: none;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;      
    `}
  `}
  ${p => !p.upwards && css`
    top: calc(100% - 1px);
    /* Box-shadow is only at bottom (spread = -1px). */
    box-shadow:     rgba(34, 36, 38, 0.2) 0 2px 2px -1px;
    ${!p.inline && css`
      border-top: none;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px; 
    `}
  `}

  /* Border color, max-height and opacity are transitioned 
     as Body opens and closes. */
  /* In a previous iteration, this worked with scaleY rather
     than max-height. It turns out that applying a transformation
     causes fractional pixel problems on its element. Since 
     Dropdown can be part of a flex, fractional pixels
     will occur. */
  transition: opacity ${p => p.theme.transition.duration*3}s ease-in-out, 
              max-height ${p => p.theme.transition.duration*3}s ease-out, 
              border-color ${p => p.theme.transition.duration*3}s ease-in-out;
  opacity: 0;
  max-height: 0;
  ${p => p.open && css`
    transition: opacity ${p => p.theme.transition.duration*3}s ease-in, 
                max-height ${p => p.theme.transition.duration*3}s ease-in, 
                border-color ${p => p.theme.transition.duration*3}s ease-in;
    ${!p.inline && css`
      border-color: ${p => lighten(0.25, p.theme.primaryColor)};
    `}
    opacity: 1;
    max-height: ${p.totalHeight}px;
  `}
`;

export { Body };