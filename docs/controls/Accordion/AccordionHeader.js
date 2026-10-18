import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
// Helpers
import { lighten } from '../../helper/lighten';
const AccordionHeaderBase = (props) => {
    const svg = _jsx("svg", { children: _jsx("use", { xlinkHref: "/spritemap.svg#caret-down" }) });
    return (_jsxs("div", { className: props.className, onClick: props.onClick, children: [(!props.align || props.align === 'left') && svg, _jsx("span", { children: props.children }), props.align === 'right' && svg] }));
};
const AccordionHeader = styled(AccordionHeaderBase) `
  display: flex;
  ${p => p.align === 'right' && css `justify-content: space-between;`}
  align-items: center;
  cursor: pointer;
  transition: color ${p => p.theme.transition.duration}s ease; 
  padding: 8px 0 8px 0;

  /* User cannot select header text.
   * This prevents accidental selection when clicking the header.
   */
  user-select: none;

  /*
   * A styled accordion header has padding and 
   * has a lighter text color when active. 
   */
  ${p => p.styled && css `
    padding: 8px 10px 8px 10px;
    ${!p.active && css `
      color: ${lighten(0.5, p.theme.fontColor)};
    `}
  `}

  /* Icon rotates when active, and changes fill color. */
  & > svg {
    width: 17px;
    height: 17px; 
    transform: ${p => p.align && p.align === 'right' ? 'rotate(90deg)' : 'rotate(-90deg)'};
    transition: fill ${p => p.theme.transition.duration}s ease, 
                transform ${p => p.theme.transition.duration}s ease;
    fill: ${p => lighten(0.5, p.theme.fontColor)};
  }
  ${p => p.active && css `
    & > svg {
      transform: rotate(0deg);
      fill: ${p => p.theme.fontColor};
    }
  `}

  &:hover {
    color: ${p => p.theme.fontColor};
    & > svg {
      fill: ${p => p.theme.fontColor};
    }
  }

  /* Separate title slightly from icon. */
  & > span {
    padding-left: 2px;
  }
`;
export { AccordionHeader };
