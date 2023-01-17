import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { Size, Float } from '../Types';

// Helpers
import { darken } from '../../helper/darken';
import { lighten } from '../../helper/lighten';
import { scaleSize } from '../../helper/SizeHelper';

// Other controls
import { ButtonOr } from './ButtonOr';
import { ButtonGroup } from './ButtonGroup';
import { Label } from '../Label/Label';
import { Ripple } from '../Ripple/Ripple';
import { IconStyled } from '../Icon/Icon';

interface IButtonProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** @ignore (Not public) True when button is in a Button.Group; styling will need to know this. */
  grouped?: boolean;
  /** 
   * Optional event handler for `onClick` event. The corresponding listener is set on the button's HTML element.
   * @default null
   */
  onClick?: () => void;
  /** 
   * Emphasis: make this button stand out using the primary theme color. 
   * @default false
   */
  primary?: boolean;
  /** 
   * Emphasis: make this button stand out using the secondary theme color. 
   * @default false
   */
  secondary?: boolean;
  /** 
   * Variation: make this button hint toward a positive consequence. 
   * @default false 
   */
  positive?: boolean;
  /** 
   * Variation: make this button hint toward a negative consequence. 
   * @default false 
   */
  negative?: boolean;
  /** 
   * Optionally set custom color for button, e.g. `skyblue` or `#ffff00`. 
   */
  color?: string;
  /** 
   * Optionally reduce button padding. 
   * @default false
   */
  compact?: boolean;
  /** 
   * Optionally set button size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. 
   * @default medium
   */
  size?: Size;
  /** 
   * Optionally make button fill the width of its container. 
   * @default false
   */
  fluid?: boolean;
  /** 
   * Optionally remove button padding, for icon-only buttons. 
   * @default false
   */
  icon?: boolean;
  /** 
   * Basic buttons have a subtler appearance. 
   * @default false
   */
  basic?: boolean;
  /** 
   * Disabled buttons cannot be pressed. 
   * @default false
   */
  disabled?: boolean;
  /** Optional; causes button to float to the `left` or `right`. */
  float?: Float;
  /** 
   * Make button circular. This works only with icon buttons. 
   * @default false
   */
  circular?: boolean;
  /** 
   * If set, disables button ripple effect. 
   * @default false
   */
  noripple?: boolean;
}

//
// The InnerBase is the actual <button> element (created by a Ripple).
//
const ButtonInnerBase = (props: IButtonProps) => {
  if(props.noripple || props.disabled) {
    return <button className={props.className}>{props.children}</button>
  } else {
    return <Ripple type="button" className={props.className}>{props.children}</Ripple>
  }
}

const ButtonInnerStyled = styled(ButtonInnerBase).attrs(p => ({
  fontSize: scaleSize(p.size, 1, p.theme.scale.button),
  /* Does the button have any color? */
  hasColor: p.primary || p.secondary || p.positive || p.negative || p.color,
  /* What is the button's color? */
  finalColor: (p:any):string => {
    if(p.primary) return p.theme.primaryColor;
    if(p.secondary) return p.theme.secondaryColor;
    if(p.positive) return p.theme.positiveColor;
    if(p.negative) return p.theme.negativeColor;
    if(p.color) return p.color;
    return p.theme.normalColor;
  }
}))`
  /* Display */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* Font */
  font-family: ${p => p.theme.fontName}, sans-serif;
  font-weight: 500;
  font-size: 1em;
  white-space: nowrap;

  /* Padding */
  padding: 0.6875em 1.2em;
  /* A compact button has reduced padding. */
  ${p => p.compact && css`padding: 0.4em 1.0em;`}
  /* A circular/icon button has square padding. */
  ${p => (p.icon || p.circular) && css`padding: 0.6875em;`} /* circular implies icon */

  /* Border */
  border: none;
  border-radius: ${p => p.theme.radius}px;

  /* Circular */
  ${p => p.circular && css`border-radius: 50%;`}

  /* Transitions */
  transition: opacity ${p => p.theme.transition.duration}s ease, 
              color ${p => p.theme.transition.duration}s ease, 
              border-color ${p => p.theme.transition.duration}s ease, 
              background-color ${p => p.theme.transition.duration}s ease, 
              box-shadow ${p => p.theme.transition.duration}s ease;
  outline: none;

  /* Cursor */
  ${p => p.disabled && css`cursor: auto;`}
  ${p => !p.disabled && css`cursor: pointer;`}

  /* Size */
  font-size: ${p => p.fontSize}em;

  /* Colors, not basic: */
  ${p => !p.basic && css`
    background-color: ${p.finalColor}
    ${!p.hasColor && css`color: ${lighten(0.2, p.theme.fontColor)};`}
    ${p.hasColor && css`color: ${p.theme.altTextColor}; font-weight: 500;`}
  `}

  /* Colors, basic: */
  ${p => p.basic && css`
    border-style: solid;
    border-width: 1px;
    background-color: ${p.theme.background};
    /* Since border occupies 1px, adjust to padding to shrink: */
    padding: calc(-1px + 0.6875em) calc(-1px + 1.2em);
    ${p.hasColor && css`
      color: ${lighten(0.2, p.finalColor(p))};
      border-color: ${lighten(0.2, p.finalColor(p))};
    `}
    ${!p.hasColor && css`
      color: ${lighten(0.5, p.theme.fontColor)}; 
      border-color: ${lighten(0.8, p.theme.fontColor)};
    `}
  `}

  /* Icon */
  ${IconStyled} {
    /* Icons on basic, uncolored buttons are dark. */
    ${p => p.basic && p.finalColor(p) === p.theme.normalColor && css`
      fill: ${darken(0.5, p.finalColor(p))};
    `}
    /* Icons on basic, colored buttons have the button border color. */
    ${p => p.basic && p.finalColor(p) !== p.theme.normalColor && css`
      fill: ${p.finalColor};
    `}
    /* Icons on uncolored normal buttons are dark. */
    ${p => !p.basic && p.finalColor(p) === p.theme.normalColor && css`
      fill: ${darken(0.5, p.finalColor(p))};
    `}
    /* Icons on colored normal buttons have a lighter shade of the
       background color. */    
    ${p => !p.basic && p.finalColor(p) !== p.theme.normalColor && css`
      fill: ${lighten(0.4, p.finalColor(p))};
    `}
    opacity: 0.8;
    /* Icon gets margin only for non-icon buttons: */
    ${p => !p.icon && !p.circular && css`margin-right:4px;`}
  }

  /* All hover effects go here. 
   * (but no hover for disabled buttons) */
  ${p => !p.disabled && css`
    &:hover {
      ${!p.basic && css`
        background-color: ${darken(p.theme.darken, p.finalColor(p))};
      `}
      ${p.basic && css`
        ${p.hasColor && css`
          color: ${p.finalColor(p)}; border-color: ${p.finalColor(p)};
        `}
        ${!p.hasColor && css`
          color: ${lighten(0.2, p.theme.fontColor)}; border-color: ${lighten(0.6, p.theme.fontColor)};
        `}      
      `}
      ${IconStyled} {
        opacity: 1.0;
      }
    }
  `}

  /* Attachment:
     If something is attached to the button, then remove its border radius. */
  &:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }  
`

// ---------------------

/*
 * ButtonBase puts a <div> around ButtonInner so that we 
 * can add attachable components.
 */
const ButtonBase = (props: IButtonProps) => {
  const isAttachedTo = (c: any, side: Float) => {
    const attached = (c.props as any).attached;
    return attached === side || (!attached && side === 'left');
  }

  // Return an array of children that are Labels and attached to this
  // Input control.
  const getAttachables = (side: Float) => {
    return React.Children.toArray(props.children)
    .filter(
      c => React.isValidElement(c)     // Is this a React node?
      && (c.props as any).isLabel      // Is this a Label?
      && isAttachedTo(c, side)    // Is it attached to this side?
    )
    .map((c: any, idx: number) => {
      let attached = (c.props as any).attached;
      if(!attached) attached = 'left'; // Attach to left side by default.
      return React.cloneElement(c, { key: idx, attached: attached } as any);
    });
  }

  const getNonAttachables = () => {
    return React.Children.map(props.children, (child:any) => {
      if(!child) return;
      // Only non-labels are passed to ButtonInner.
      if(!child.type) return child;
      if(child.type !== Label) return child;
    })
  }

  // We must pass all props down to ButtonInnerStyled,
  // EXCEPT className, or the parent's classes will 
  // be added to the child.
  const {className, ...otherProps} = props;
  return (
    <div className={className} onClick={otherProps.onClick}>
      {getAttachables('left')}
      <ButtonInnerStyled {...otherProps}>
        {getNonAttachables()}
      </ButtonInnerStyled>
      {getAttachables('right')}        
    </div>
  );
}

const ButtonStyled = styled(ButtonBase)`
  position:    relative;
  display:     inline-flex;
  align-items: stretch;
  /* Floating */
  ${p => p.float === 'left' && css`float:left;`}
  ${p => p.float === 'right' && css`float:right;`}    
  /* Fluid */
  ${p => p.fluid && css`width: 100%;`}  
  /* Buttons in groups have no margin. */
  ${p => !p.grouped && css`margin: 0 2px;`}
  /* A disabled button is 50% transparent. */
  ${p => p.disabled && css`opacity: 0.5;`}
  /* Clickable */
  ${p => p.onClick && css`cursor: pointer;`}
`;

/**
 * A Button can be clicked and styled.
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-button--properties
 */
const Button = (props: IButtonProps) =>
  <ButtonStyled {...props} disabled={props.disabled}></ButtonStyled>

/**
 * Button groups can contain conditionals using Button.Or.
 * 
 * @example
 * <Button.Group>
 *   <Button>One</Button> 
 *   <Button.Or/>
 *   <Button positive>Two</Button> 
 * </Button.Group>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-button-groups--group-attributes
 */  
Button.Or = ButtonOr;

/**
 * Buttons can be grouped horizontally or vertically using Button.Group.
 * 
 * @example
 * <Button.Group vertical>
 *  <Button>One</Button> 
 *  <Button>Two</Button> 
 *  <Button>Three</Button> 
 * </Button.Group> 
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-button-groups--conditional
 */  
Button.Group = ButtonGroup;

export { Button, IButtonProps };