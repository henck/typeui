import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
// Other controls
import { Ripple } from '../Ripple/Ripple';
const HeaderBase = (props) => {
    const svg = _jsx("svg", { children: _jsx("use", { xlinkHref: "/spritemap.svg#caret-down" }) });
    return (_jsx(Ripple, { children: _jsxs("div", { className: props.className, onClick: props.onClick, children: [props.align !== 'right' && svg, _jsx("span", { children: props.children }), props.align === 'right' && svg] }) }));
};
const Header = styled(HeaderBase) `
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.background};
  box-sizing: border-box;

  /* Vertical gridlines */
  ${p => p.grid && css `
  &:not(:first-child) {
    border-left: solid 1px ${p => p.theme.normalColor};
  }`}

  /* On small screens, only the first Heading is shown. */
  ${p => !p.force && css ` 
    &:not(:first-child) {
      @media (max-width: ${p => p.theme.smallScreen}px) {
        display: none;
      }
    }    
  `}

  /* All cells are equal width. Todo? */
  flex: ${p => p.weight ? p.weight : 1};
  overflow-x: hidden;

  padding: 16px 32px 16px 6px;
  
  &:last-child {
    padding-right: 36px;
  
  }
  ${p => p.orderable && css `cursor:pointer;`}

  /* Header content */
  span {
    /* Text alignment */
    flex: 1;
    text-align: left;
    ${p => p.align === 'right' && css `text-align: right;`}

    font-size: 12px;
    font-weight: 500;

    /* Text is truncated with an ellipsis. */
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;  
  }  
  
  /* Ordering icon */

  & > svg {
    width: 0;
    height: 0;   
    transition: transform ${p => p.theme.transition.duration * 2}s ease, 
                width ${p => p.theme.transition.duration * 2}s ease, 
                height ${p => p.theme.transition.duration * 2}s ease;
    fill: ${p => p.theme.fontColor};
    transform: rotate(180deg);
  }
  
  &:hover {
    ${p => p.orderable && css `
      & > svg {
        width: 17px;
        height: 17px;
      }
    `}
  }

  ${p => p.ordered && css `
    & > svg {
      width: 17px;
      height: 17px;
    }
  `}

  ${p => ((p.ordered && p.dir === 'desc') || (!p.ordered && p.defaultDir === 'desc')) && css `
    & > svg {
      transform: rotate(0deg);
    }
  `}
`;
export { Header };
