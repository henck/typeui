import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { HorizontalAlignment, Float, VerticalDirection } from '../Types';

// Helpers
import { darken } from '../../helper/darken';
import { alpha } from '../../helper/alpha';

interface ISegmentProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Segment will have an extra-strong dropshadow if true. 
   * @default false 
   */
  raised?: boolean;
  /** 
   * Segment will have a page lying below it if true. 
   * @default false
   */
  stacked?: boolean;
  /** 
   * (With stacked): Segment will have two pages lying below it if true. 
   * @default false
   */
  tall?: boolean;
  /** 
   * Segment will have a disorganized pile of two pages lying below it if true. 
   * @default false 
   */
  piled?: boolean;
  /** 
   * Align content to `left`, `center` or `right`. By default `left`. 
   */
  align?: HorizontalAlignment;
  /** 
   * Segment can float to the `left` or `right`. 
   */
  float?: Float;
  /** 
   * Decrease segment's emphasis. 
   * @default false
   */
  secondary?: boolean;
  /** 
   * Seriously decrease segment's emphasis. 
   * @default false
   */
  tertiary?: boolean;
  /** 
   * Custom color 
   */
  color?: string;
  /** 
   * Increase segment padding (optionally `very`). 
   * @default false
   */
  padded?: 'very' | boolean;
  /** 
   * Decrease segment padding. 
   * @default false
   */
  tight?: boolean;
  /** 
   * Only take up as much space as necessary. 
   * @default false
   */
  compact?: boolean;
  /** 
   * A disabled segment is light in color.
   * @default false
   */
  disabled?: boolean;
  /** 
   * Attached to `top`, `bottom` or nothing (both). 
   */
  attached?: boolean | VerticalDirection;
}

// An :after clearfix isn't possible as Segment uses :before and :after
// for other purposes.
const ClearSegment = styled.div` 
  clear: both;
`;

const SegmentBase = (props: ISegmentProps) => 
  // Yes, this needs a double <div>:
  <div className={props.className}>
    <div>
      {props.children}
      <ClearSegment/>
    </div>
  </div>

/**
 *  A Segment wraps an area of content.
 */
const SegmentStyled = styled(SegmentBase)`
  /* Segment's div must be wrapped in a parent div, which must set
   * a stacking context, in order for negative z-indices used
   * by 'stacked' and 'piled' to work.
   * http://www.independent-software.com/set-stacking-order-of-pseudo-elements-below-parent-element.html
   */
  position: relative;
  /* z-index: 1; */ /* DISABLED! */

  /* Margin:
     Attached segments have no margin, except bottom-attached. */
  ${p => (!p.attached || p.attached == 'bottom') && css`margin-bottom: 1em;`}
  
  /* Floating */
  ${p => p.float === 'left' && css`float:left;`}
  ${p => p.float === 'right' && css`float:right;`}

  /* Compact */
  ${p => p.compact && css`display:table;`}

  & > div {
    position: relative;
    background: ${p => p.theme.background};
    padding: 14px;

    /* Shadow: only unattached segments have a dropshadow. */
    ${p => !p.attached && css`box-shadow: ${p => alpha(0.5, darken(0.5, p.theme.normalColor))} 0px 1px 2px 0px;`}

    /* Attachment and border: */
    border-color: ${p => p.theme.normalColor};
    border-style: solid;
    border-left-width: 1px;
    border-right-width: 1px;
    /* Not attached: normal border. */
    ${p => !p.attached && css`
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-radius: ${p => p.theme.radius}px;
    `}
    /* Middle attached: Only bottom border. */
    ${p => p.attached && p.attached !== 'top' && p.attached !== 'bottom' && css`
      border-bottom-width: 1px;
      border-radius: none;
    `}      
    /* Top attached: Top and bottom border. */
    ${p => p.attached === 'top' && css`
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-left-radius: ${p.theme.radius}px;
      border-top-right-radius: ${p.theme.radius}px;
    `}
    /* Botom attached: Only bottom border. */
    ${p => p.attached === 'bottom' && css`
      border-bottom-width: 1px;
      border-bottom-left-radius: ${p.theme.radius}px;
      border-bottom-right-radius: ${p.theme.radius}px;
    `}

    /* A raised Segment gets an extra deep shadow. */
    ${p => p.raised && css`box-shadow: ${p => alpha(0.5, darken(0.5, p.theme.normalColor))} 0px 2px 10px 0px;`}

    /* Secondary, tertiary */
    ${p => p.secondary && css`
      background: ${darken(0.1, p.theme.background)};
    `}
    ${p => p.tertiary && css`
      background: ${darken(0.2, p.theme.background)};
    `}
    ${p => p.color && css`
      background: ${p.color};
    `}

    /* Padded */
    ${p => p.padded && p.padded !== 'very' && css`padding: 21px;`}
    ${p => p.padded && p.padded === 'very' && css`padding: 42px;`}
    ${p => p.tight && css`padding: 4px 14px;`}

    /* Disabled */
    ${p => p.disabled && css`opacity: 0.45;`}

    /* Text alignment. */
    ${p => p.align === 'left' && css`text-align:left;`}
    ${p => p.align === 'center' && css`text-align:center;`}
    ${p => p.align === 'right' && css`text-align:right;`}
    
    /* Define default styles for :before, :after so as not to repeat them. */
    &:before, &:after {
      position: absolute;
      background: #fff;
      border: solid 1px rgba(34, 36, 38, 0.15);
      border-radius: ${p => p.theme.radius}px;
      box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;
    }

    /* 
     * A stacked segment has a single page beneath it. This is done using 
     * :before and z-index=-1. For negative z-indices to work, the parent
     * element must not have a stacking index (no z-index).
    */
    ${p => p.stacked && css`&:before {
      content: '';
      left: 4px;
      top: 4px;
      right: -4px;
      bottom: -4px;
      z-index: -1;
    }`}

    /* 
     * A tall stacked segment has a two pages beneath it. This is done using 
     * :before, :after and z-index=-1. For negative z-indices to work, the 
     * parent element must not have a stacking index (no z-index).
     */
    ${p => p.stacked && p.tall && css`&:after {
      content: '';
      left: 7px;
      top: 7px;
      right: -7px;
      bottom: -7px;
      z-index: -2;
    }`}

    /*
     * A piled segment has two rotated pages behind it.
     */
    ${p => p.piled && css`
      &:before, &:after {
        content: '';
        left: 5px;
        top: 0;
        right: -5px;
        bottom: 0;
        z-index: -1;
        transform: rotate(.4deg);
      }
      &:after {
        left: 0;
        right: 0;
        z-index: -2;
        transform: rotate(.8deg);
      }
    `}
  }
`

/**
 * A Segment places a border around some content.
 * 
 * @example
 * <Segment piled>Some content</Segment>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-segment--properties
 */
const Segment = (props: ISegmentProps) => <SegmentStyled {...props}/>

export { Segment, ISegmentProps }
