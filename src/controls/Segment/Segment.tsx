import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { HorizontalAlignment, Float, VerticalDirection } from '../Types';

// Helpers
import { darken } from '../../helper/darken';

interface ISegmentProps {
  className?: string;
  children?: React.ReactNode;
  /** Segment will have an extra-strong dropshadow if true. */
  raised?: boolean;
  /** Segment will have a page lying below it if true. */
  stacked?: boolean;
  /** (With stacked): Segment will have two pages lying below it if true. */
  tall?: boolean;
  /** Segment will have a disorganized pile of two pages lying below it if true. */
  piled?: boolean;
  /** Align content to `left`, `center` or `right`. By default `left`. */
  align?: HorizontalAlignment;
  /** Segment can float to the `left` or `right`. */
  float?: Float;
  /** Decrease segment's emphasis. */
  secondary?: boolean;
  /** Seriously decrease segment's emphasis. */
  tertiary?: boolean;
  /** Increase segment padding (optionally `very`). */
  padded?: 'very' | boolean;
  /** Only take up as much space as necessary. */
  compact?: boolean;
  /** A disabled segment is light in color. */
  disabled?: boolean;
  /** Attached to `top`, `bottom` or nothing (both). */
  attached?: boolean | VerticalDirection;
}

// An :after clearfix isn't possible as Segment uses :before and :after
// for other purposes.
const ClearSegment = styled('div')` 
  clear: both;
`;

class SegmentBase extends React.PureComponent<ISegmentProps, {}> {
  render() {
    let p = this.props;
    // Yes, this needs a double <div>:
    return (
      <div className={p.className}>
        <div>
          {p.children}
          <ClearSegment/>
        </div>
      </div>
    );
  }
}

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
    background: #fff;
    padding: 14px;

    /* Shadow: only unattached segments have a dropshadow. */
    ${p => !p.attached && css`box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;`}

    /* Attachment and border: */
    border-color: rgba(34, 36, 38, 0.15);
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
    ${p => p.raised && css`box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;`}

    /* Secondary, tertiary */
    ${p => p.secondary && css`
      background: ${darken(0.1, '#fff')};
    `}
    ${p => p.tertiary && css`
      background: ${darken(0.2, '#fff')};
    `}

    /* Padded */
    ${p => p.padded && p.padded !== 'very' && css`padding: 21px;`}
    ${p => p.padded && p.padded === 'very' && css`padding: 42px;`}

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

// Storybook won't find properties if we don't create a component.
class Segment extends React.PureComponent<ISegmentProps, {}> {
  public static displayName = 'Segment';

  render() {
    return (
      <SegmentStyled {...this.props}></SegmentStyled>
    );
  }
}

export { Segment };
