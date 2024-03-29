import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { Size, Direction, Float } from '../Types';

// Helpers
import { darken } from '../../helper/darken';
import { lighten } from '../../helper/lighten';
import { scaleSize } from '../../helper/SizeHelper';

// Other controls
import { LabelGroup } from './LabelGroup';
import { LabelDetail } from './LabelDetail';
import { ImageStyled } from '../Image/Image';
import { IconStyled } from '../Icon/Icon';

interface ILabelProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * A `basic` Label adds a border and does not have a background. 
   * @default false
   */
  basic?: boolean;
  /** 
   * Label background color, e.g. `skyblue`. 
   */
  color?: string;
  /** 
   * Label content may be passed as a property. 
   */
  positive?: boolean;
  /**
   * If set, use `positive` color for Label.
   */
  negative?: boolean;
  /**
   * If set, use `negative` color for Label.
   */  
  content?: React.ReactNode;
  /** 
   * A floating Label floats over the top-right corner of its parent. 
   * @default false
   */
  floating?: boolean;
  /** 
   * Point to other content to the `left`, `top`, `right` or `bottom`. Default direction is `left` 
   */
  pointing?: boolean | Direction;
  /** 
   * Label size, one of `mini`, `tiny`, `small`, `medium`, `large`, `big`, `huge` and `massive`. 
   * @default medium
   */
  size?: Size;
  /** 
   * If set, Label appears as a tag. 
   * @default false
   */
  tag?: boolean;
  /** 
   * Determine if Label is attached to anything, `left` or `right`. 
   */
  attached?: Float;
  /** 
   * onClick events are passed through to the Label's HTML element.
   */
  onClick?: () => void;
}

const LabelBase = (props: ILabelProps) =>
  <div className={props.className} onClick={props.onClick}>{props.children}{props.content}</div>

const LabelStyled = styled(LabelBase).attrs(p => ({
  emSize: scaleSize(p.size, 0.86, p.theme.scale.label),
  finalColor: p.positive ? p.theme.positiveColor : (p.negative ? p.theme.negativeColor : p.color)
}))`
  display:     inline-flex;
  align-items: center;
  box-sizing:  border-box;
  line-height: 100%; /* of the font-size */
  white-space: nowrap; /* text in label must not wrap into multiple lines. */
  padding:     0.58em 0.83em; /* Padding scales with font size. */
  vertical-align: middle;
  border-radius: ${p => p.theme.radius}px;
  user-select: none;

  /* Position */
  ${p => !p.floating && css`position: relative;`}
  ${p => p.floating && css`
    position: absolute;
    top: 0;
    right: 0;    
    transform: translateX(40%) translateY(-70%);
    z-index: 1;
  `}

  /* Colors and border */
  ${p => p.basic && css`
    border: solid 1px ${p.finalColor ? p.finalColor : p.theme.normalColor};
    /* Since border occupies 1px, reduce padding by 1px: */
    padding: calc(-1px + 0.58em) calc(-1px + 0.83em);
    color: ${p.finalColor ? p.finalColor : lighten(0.4, p.theme.fontColor)}; 
    background: ${p.theme.background};
    font-weight: 500;
  `}
  ${p => !p.basic && css`
    color:       ${p.finalColor ? "#fff" : lighten(0.3, p.theme.fontColor)};
    background:  ${p.finalColor ?? p.theme.normalColor};
    font-weight: ${p.finalColor ? "500" : "inherit"};
  `}
  
  /* Adjacent labels have a small margin. This does not apply to
   * pointing labels. */
  ${p => !p.pointing && css`margin: 0 0.2em;`}
  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }

  /* Size */  
  font-size: ${p => p.emSize}em;

  /* Images in the label are resized vertically. */
  ${ImageStyled} {
    display: inline-block;
    height: calc(1em + 2 * 0.58em);
    min-height: 0;
    margin: -0.58em 0.5em -0.58em -0.83em;
    vertical-align: top; /* This way, we can use margin = minus parent padding */
    img {
      border-top-left-radius: ${p => p.theme.radius}px;
      border-bottom-left-radius: ${p => p.theme.radius}px;
      height: calc(1em + 2 * 0.58em);
    }
  }

  /* Align icon (if present) with text. */
  ${IconStyled} {
    display: inline-block;
    vertical-align: top;
    margin: 0 0.2em;
  }

  /* onClick hover: */
  ${p => p.onClick && css`
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    &:hover {
      ${p.basic && !p.finalColor && css`
        color: ${p.theme.primaryColor};
      `}
      ${!p.basic && css`
        background-color: ${darken(0.05, p.finalColor ?? p.theme.normalColor)};
        ${!p.finalColor && css`color:${p.theme.fontColor};`}
      `}      
    }
  `}

  /* 
   * Pointing:
   * 
   * Pointing is done by using a small square as :before. It's positioned
   * where the arrow must be, then rotated and given borders on the 
   * appropriate sides.
   */
  ${p => !p.tag && css` /* No pointing on tags. */
    ${p.pointing && css`
      &:before {
        content: '';
        position: absolute;
        width: 0.6em;
        height: 0.6em;
        border-style: inherit;
        border-color: inherit;
        background: inherit;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
      }
    `}

    /* Pointing left (either no pointing value provided or "left"): */
    ${p.pointing && (typeof p.pointing === "boolean" || p.pointing === "left") && css`
      margin-left: 1em;
      &:before {
        left: ${p.basic ? '-1px' : '0'}; /* Shift for basic border */
        top: 50%;
        border-width: 0 0 1px 1px;
      }
    `}

    /* Pointing right: */
    ${p.pointing && p.pointing === "right" && css`
      margin-right: 1em;
      &:before {
        left: 100%;
        ${p.basic && css `margin-left: 1px;`} /* Shift for basic border */
        top: 50%;
        border-width: 1px 1px 0 0;
      }
    `}

    /* Pointing top: */
    ${p.pointing && p.pointing === "top" && css`
      margin-top: 1em;
      &:before {
        left: 50%;
        top: ${p.basic ? '-1px' : '0'}; /* Shift for basic border */
        border-width: 1px 0 0 1px;
      }
    `}

    /* Pointing bottom: */
    ${p.pointing && p.pointing === "bottom" && css`
      margin-bottom: 1em;
      &:before {
        left: 50%;
        ${p.basic && css `margin-top: 1px;`} /* Shift for basic border */
        top: 100%;
        border-width: 0 1px 1px 0;
      }
    `}  
  `}

  /* Tag */
  ${p => p.tag && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 1.07em; /* 0.2em space between labels, plus half label height */
    &:first-child { margin-left: 1.05em; } /* Override original value */
    padding-left: 1.9em;
    padding-right: 1.4em;
    /* Arrow part */
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      background-color: inherit;
      width: 1.5274em; /* Label height * sqrt(2) */
      height: 1.5274em;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      border-width: inherit;
      border-style: inherit;
      border-color: inherit;
      ${p.basic && css`border-width: 0 0 1px 1px;`}
    }
    /* Hole part */
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: -.25em;
      background: ${p.theme.background};
      width: .5em;
      height: .5em;
      ${!p.basic && css`box-shadow: 0 -1px 1px 0 rgba(0,0,0,.3);`}
      transform: translateY(-50%);
      border-radius: 1em;
      ${p.basic && css`
        border: inherit;
      `}
    }

    /* Inside a tag, images are no longer rounded. */
    ${ImageStyled} {
      img {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  `} 

  /* 
   * Attached
   * 
   * A Label can be attached to other content (e.g. Input, Dropdown, Button). 
   * When it is attached, border-rounding and borders change.
   */
  ${p => p.attached && css`
    margin: 0;
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `}
  ${p => p.attached && p.attached !== 'right' && css`border-right-width: 0;`}
  ${p => p.attached && p.attached === 'right' && css`border-left-width: 0;`}
`;

/**
 * Stylable label.
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-label--properties
 */
class Label extends React.Component<ILabelProps> {

  /* This is used by parent components to determine if a child is a Label. */
  public static defaultProps = {
    isLabel: true
  }

  /** 
   * A Label.Group can pass props to the labels it contains, but 
   * children can still override them. Goups can pass along basic, 
   * color, pointing, size and tag.
   */
  public static Group = LabelGroup;

  /** 
   * A label can contain a Label.Detail inside it. 
   */
  public static Detail = LabelDetail;

  render = () => <LabelStyled {...this.props}/>;
}

export { Label, LabelStyled }
