import * as React from 'react';
import styled from '../../styles/Theme';
import { keyframes, css } from 'styled-components';

// Types
import { Size, Float } from '../Types';

// Helpers
import { lighten } from '../../helper/lighten';
import { scaleSize } from '../../helper/SizeHelper';

import { IconType } from './IconType';

interface IIconProps {
  /** @ignore */
  className?: string;
  /** 
   * Name of sprite from SVG spritesheet to use, e.g. 'caret-down' 
   */
  name?: IconType;
  /** 
   * URL of spritesheet and icon, e.g. 'sprites.svg#arrow' 
   */
  url?: string;
  /** 
   * Optional icon popup title. 
   */
  title?: string;
  /** 
   * Disabled icons have a lighter color. 
   * @default false 
   */
  disabled?: boolean;
  /** 
   * Icon size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. 
   */
  size?: Size;
  /** 
   * Flip icon vertically. 
   * @default false 
   */
  flipped?: boolean;
  /** 
   * Mirror icon horizontally. 
   * @default false 
   */
  mirrored?: boolean;
  /** 
   * Rotate icon by degrees, e.g. `90` for a quarter rotation to the right. 
   * @default 0
   */
  rotated?: number;
  /** 
   * Icon color, e.g. `skyblue`. 
   */
  color?: string;
  /** 
   * Add circular border. 
   * @default false 
   */
  circular?: boolean;
  /** 
   * Invert the icon's colors. 
   * @default false
   */
  inverted?: boolean;
  /** 
   * Add square border. 
   * @default false 
   */
  bordered?: boolean;
  /** 
   * Add rounded border. 
   * @default false 
   */
  cornered?: boolean;
  /** 
   * Add a rotation animation. 
   * @default false 
   */
  loading?: boolean;
  /** 
   * Floating to the \`left\` or \`right\`. 
   */
  float?: Float;
  /** 
   * Adds spacing around the icon. 
   * @default false
   */
  padded?: boolean;
  /** 
   * An icon can have an `onClick` handler. 
   */
   onClick?: () => void;
}

class IconBase extends React.Component<IIconProps> {
  render() {
    let p = this.props;
    return (
      <svg className={p.className} onClick={p.onClick} focusable="false">
        {p.title && <title>{p.title}</title>}
        {p.name && <use xlinkHref={"spritemap.svg#" + p.name}></use>}
        {p.url && <use xlinkHref={p.url}></use>}
      </svg>
    )
  }  
}

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const IconStyled = styled(IconBase).attrs(p => ({
  hasBorder: (p.circular || p.bordered || p.cornered),
  hasBackground: (p.circular || p.bordered || p.cornered) && p.inverted,
  emSize: scaleSize(p.size ? p.size : 'medium', 1, p.theme.scale.icon)
}))`
  shape-rendering: geometricPrecision;
  
  /* Spacing around icon. */
  ${p => p.padded && css`margin: 2px;`}

  /* Clickable icons have a hover animation. */
  ${p => p.onClick && css`cursor: pointer;`}

  /* Floating */
  ${p => p.float === 'left' && css`float:left;`}
  ${p => p.float === 'right' && css`float:right;`}  

  /* Disabled */
  ${p => p.disabled && css`opacity: 0.6;`}

  /* Sizes. We use the precalculated 'em' size values. */  
  width: ${p => p.emSize}em;  
  height: ${p => p.emSize}em;
  /* Don't be squished when in a flex: */
  min-width: ${p => p.emSize}em;  
  min-height: ${p => p.emSize}em;

  /* Transformations */
  ${p => p.flipped  && css`transform: scaleY(-1);`}
  ${p => p.mirrored && css`transform: scaleX(-1);`}
  ${p => p.rotated  && css`transform: rotate(${p.rotated}deg);`}

  /* Border radius, for circular and cornered: */
  ${p => p.circular && css`border-radius: 50%;`}
  ${p => p.cornered && css`border-radius: ${p.theme.radius}px;`}

  /* Icon colors */
  ${p => !p.hasBackground && css`
    ${p.hasBorder && css`padding: 4px;`}
    fill: ${p.color ? p.color : p.theme.fontColor};
    /* Note that the border thickness uses the pre-calculated 'em' size value, with the 'em' removed. */
    ${p.hasBorder && css`border: solid ${p.emSize}px ${p.color ? p.color : p.theme.normalColor};`}
    ${p.onClick && css`
      transition: fill ${p.theme.transition.duration} ease, border-color ${p.theme.transition.duration} ease;
      &:hover {
        ${p.hasBorder && css`border-color: ${lighten(0.3, p.color ? p.color : p.theme.normalColor)};`}
        fill: ${lighten(0.3, p.color ? p.color : p.theme.fontColor)};
      }
    `}
  `}
  ${p => p.hasBackground && css`
    padding: 5px;
    fill: #fff;
    background: ${p.color ? p.color : p.theme.fontColor};
    ${p.onClick && css`
      transition: background-color ${p.theme.transition.duration} ease;
      &:hover {
        background: ${lighten(0.5, p.color ? p.color : p.theme.fontColor)};
      }    
    `}
  `}

  /* Loading */
  ${p => p.loading && css`
    animation: ${rotate} 2s linear infinite;
  `}
`;

/**
 * Displays an icon.
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-icon--properties
 */
class Icon extends React.Component<IIconProps> {

  /* This is used by parent components to determine if a child is an Icon. */
  public static defaultProps = {
    isIcon: true
  }

  render = () =><IconStyled {...this.props}></IconStyled>
}

export { IconBase, Icon, IconStyled, IIconProps }
