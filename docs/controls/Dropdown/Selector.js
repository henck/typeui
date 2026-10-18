import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
// Helpers
import { lighten } from '../../helper/lighten';
const SelectorBase = (props) => {
    const handleClear = (e) => {
        e.stopPropagation();
        if (props.onClear)
            props.onClear();
    };
    return (_jsxs("div", { className: `${props.className} clickable`, onClick: props.onClick, children: [_jsxs("span", { children: [props.children, props.children == null ? _jsx(_Fragment, { children: "\u00A0" }) : ""] }), _jsx("svg", { children: _jsx("use", { xlinkHref: "/spritemap.svg#caret-down" }) }), _jsx("svg", { onClick: handleClear, children: _jsx("use", { xlinkHref: "/spritemap.svg#times" }) })] }));
};
const Selector = styled(SelectorBase) `
  position:        relative;
  display:         block;
  box-sizing:      border-box;
  width:           100%;
  cursor:          pointer;
  background:      ${p => p.theme.background};

  /* Disabled */
  ${p => p.disabled && css `
    opacity: 0.5;
    cursor: auto;
  `}  

  &>span {
    display: block;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
    /* Add ellipsis to selection text */
    ${p => !p.multiple && css `text-overflow: ellipsis;`}
  }

  /* Inline Dropdowns have no border, but normal Dropdowns do. */
  border:         solid 1px ${p => p.inline ? "transparent" : p.theme.normalColor};
  border-radius:  ${p => p.theme.radius}px;
  line-height:    17px;
  padding:        9px 30px 9px 14px;
  ${p => p.multiple && !p.placeholder && css `padding: 7px 30px 7px 14px;`}
  min-height:     17px;
  ${p => p.error && !p.open && css `
    background:   ${p.theme.errorColor.background};
    border-color: ${p.inline ? "transparent" : p.theme.errorColor.border};
  `}

  /* Placeholder labels will be light in color: */
  ${p => p.placeholder && css `
    color: ${p => lighten(0.6, p.theme.fontColor)};  
  `}

  /* When in error state, color text. */
  ${p => p.error && !p.open && css `
    color: ${p.theme.errorColor.color};
  `}
  
  /* When the Dropdown is open, the selector's bottom edge 
     (or top edge, for upwards) is colored white. */
  transition: border-color ${p => p.theme.transition.duration * 3}s ease-in-out, 
              border-radius ${p => p.theme.transition.duration * 3}s ease-in-out,
              color ${p => p.theme.transition.duration * 3}s ease-in-out,
              background-color ${p => p.theme.transition.duration * 3}s ease-in-out;
  ${p => p.open && !p.inline && css `
    border-color: ${p => lighten(0.25, p.theme.primaryColor)};
    border-${p.upwards ? 'top' : 'bottom'}-color: #fff;
    border-${p.upwards ? 'top' : 'bottom'}-left-radius: 0px;
    border-${p.upwards ? 'top' : 'bottom'}-right-radius: 0px;
  `}

  /* If parent DIV has focus, give this a border. */
  ${p => !p.inline && css `
    div:focus & {
      border-color: ${p => lighten(0.25, p.theme.primaryColor)};
    }
  `}
  
  /* Icon size and positions: */
  & > svg {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    width: 17px;
    height: 17px;
    margin-left: 0.5em;
  }

  /* Caret icon is only shown when there is an onClear callback. */
  & > svg:nth-of-type(1) {
    display: ${p => p.onClear ? 'none' : 'block'};
    transition: fill ${p => p.theme.transition.duration * 3}s ease-in-out;
    fill: ${p => (p.error && !p.open) ? p.theme.errorColor.color : (p.disabled ? '#888' : p.theme.fontColor)};
  }
  /* Clear icon is only shown when there is an onClear callback. */
  & > svg:nth-of-type(2) {
    fill: ${p => p.theme.fontColor};
    opacity: 0.7;
    display: ${p => p.onClear ? 'block' : 'none'};
    transition: opacity ease-in-out 120ms;
    &:hover {
      opacity: 1;
    }
  }
`;
export { Selector };
