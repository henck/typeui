import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
import { keyframes, css } from 'styled-components';
// Helpers
import { lighten } from '../../helper/lighten';
import { scaleSize } from '../../helper/SizeHelper';
class IconBase extends React.Component {
    render() {
        let p = this.props;
        return (_jsxs("svg", { className: p.className, onClick: p.onClick, focusable: "false", children: [p.title && _jsx("title", { children: p.title }), p.name && _jsx("use", { xlinkHref: "/spritemap.svg#" + p.name }), p.url && _jsx("use", { xlinkHref: p.url })] }));
    }
}
const rotate = keyframes `
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;
const IconStyled = styled(IconBase).attrs(p => ({
    hasBorder: (p.circular || p.bordered || p.cornered),
    hasBackground: (p.circular || p.bordered || p.cornered) && p.inverted,
    emSize: scaleSize(p.size ? p.size : 'medium', 1, p.theme.scale.icon)
})) `
  shape-rendering: geometricPrecision;
  
  /* Spacing around icon. */
  ${p => p.padded && css `margin: 2px;`}

  /* Clickable icons have a hover animation. */
  ${p => p.onClick && css `cursor: pointer;`}

  /* Floating */
  ${p => p.float === 'left' && css `float:left;`}
  ${p => p.float === 'right' && css `float:right;`}  

  /* Disabled */
  ${p => p.disabled && css `opacity: 0.6;`}

  /* Sizes. We use the precalculated 'em' size values. */  
  width: ${p => p.emSize}em;  
  height: ${p => p.emSize}em;
  /* Don't be squished when in a flex: */
  min-width: ${p => p.emSize}em;  
  min-height: ${p => p.emSize}em;

  /* Transformations */
  ${p => p.flipped && css `transform: scaleY(-1);`}
  ${p => p.mirrored && css `transform: scaleX(-1);`}
  ${p => p.rotated && css `transform: rotate(${p.rotated}deg);`}

  /* Border radius, for circular and cornered: */
  ${p => p.circular && css `border-radius: 50%;`}
  ${p => p.cornered && css `border-radius: ${p.theme.radius}px;`}

  /* Icon colors */
  ${p => !p.hasBackground && css `
    ${p.hasBorder && css `padding: 4px;`}
    fill: ${p.color ? p.color : p.theme.fontColor};
    /* Note that the border thickness uses the pre-calculated 'em' size value, with the 'em' removed. */
    ${p.hasBorder && css `border: solid ${p.emSize}px ${p.color ? p.color : p.theme.normalColor};`}
    ${p.onClick && css `
      transition: fill ${p.theme.transition.duration} ease, border-color ${p.theme.transition.duration} ease;
      &:hover {
        ${p.hasBorder && css `border-color: ${lighten(0.3, p.color ? p.color : p.theme.normalColor)};`}
        fill: ${lighten(0.3, p.color ? p.color : p.theme.fontColor)};
      }
    `}
  `}
  ${p => p.hasBackground && css `
    padding: 5px;
    fill: #fff;
    background: ${p.color ? p.color : p.theme.fontColor};
    ${p.onClick && css `
      transition: background-color ${p.theme.transition.duration} ease;
      &:hover {
        background: ${lighten(0.5, p.color ? p.color : p.theme.fontColor)};
      }    
    `}
  `}

  /* Loading */
  ${p => p.loading && css `
    animation: ${rotate} 2s linear infinite;
  `}
`;
/**
 * Displays an icon.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-icon--properties
 */
class Icon extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx(IconStyled, { ...this.props });
    }
}
/* This is used by parent components to determine if a child is an Icon. */
Icon.defaultProps = {
    isIcon: true
};
export { IconBase, Icon, IconStyled };
