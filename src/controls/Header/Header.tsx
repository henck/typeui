import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { Float, VerticalDirection, HorizontalAlignment } from '../Types';
import { Icon } from '../../controls/Icon/';
import { Subheader } from './Subheader';
import { HeaderContent } from './HeaderContent';
import { modularScale, Ratio } from '../../helper/SizeHelper';

/**
 * The <Header> component offers sizes h1..h6. The size ratio is determined using the
 * modularScale algorithm. Starting at 1rem (normal text), h6 is the next
 * scale up, h5 the scale after that and so on. The actual scale ratio can be defined in
 * the theme.
 * 
 * By default header sizes are in 'rem', but by adding the 'relative' attribute they
 * will be in 'em' and header size will be relative to the header's container's 
 * font-size.
 * 
 * Usage:
 * <Header size='h1'>Hello, world</Header>
 * 
 * 'size' is a mandatory attribute.
 */

/* Original Semantic UI sizes:
  h1
    size: 28
    height: 36
    margin 24, 14

  h2
    size: 24
    height: 30.85
    margin: 24.56, 14

  h3
    size: 18
    height: 23.15
    margin: 25.43, 14

  h4
    size: 15
    height: 19.28
    margin: 25.85, 14

  h5
    size: 14
    height: 18
    margin: 26, 14

  h6
    size: 9.38333
    height: 12.0667
    margin: 26.666, 0

  Ratio line-height/font-size is always 1.286.
  */ 

export type HeaderSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IHeaderProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  /** Header size: one of `h1` through `h6`. */
  size: HeaderSize;
  /** By default, header sizes are absolute and use rem units. When 
   *  relative sizes are selected, 'em' units are used and the header size 
   *  is relative to the container's font-size. */
  relative?: boolean;
  /** Have header show as inactive. */
  disabled?: boolean;
  /** A Header can float to the `left` or to the `right`. */
  float?: Float;
  /** Draw block around header */
  block?: boolean;
  /** Attached to 'top', 'bottom' or nothing (both). */
  attached?: boolean | VerticalDirection;  
  /** Align content to `left`, `center` or `right`. By default `left`. */
  align?: HorizontalAlignment;    
  /** Header color, e.g. `skyblue`. */
  color?: string;
  /** A dividing header has a bottom border. */
  dividing?: boolean;
  /** Emphasize icon in header */
  icon?: boolean;
}

class HeaderBase extends React.Component<IHeaderProps, {}> {
  render() {
    // This uses createElement rather than JSX in order to express
    // everything in one line. The HeaderSize attribute is used as
    // the element name.
    return React.createElement(this.props.size, { className: this.props.className, onClick: this.props.onClick }, this.props.children);
  }
}

/** Convert a HeaderSize to a size class number, i.e.
 *  h1 => 1
 *  h2 => 2
 *  ...
 *  h6 => 6
 */
function sizeToNumber(headerSize: HeaderSize): number {
  return parseInt(headerSize.substr(-1));
}

/**
 * Determine font-size CSS using Modular Scale Ratio.
 * Absolute-sized headers (the default) use 'rem', while relative-sized
 * headers use 'em'.
 */
function getFontSize(headerSize: HeaderSize, relative: boolean | undefined, base: number, scaleRatio: Ratio): string {
  let scale: number = -(sizeToNumber(headerSize) - 1);
  return modularScale(scale, base, scaleRatio) + (relative ? 'em' : 'rem'); 
}

/**
 * Determine line-height CSS using Modular Scale Ratio.
 */
function getLineHeight(headerSize: HeaderSize, relative: boolean | undefined, base: number, scaleRatio: Ratio, heightRatio: number) : string {
  let scale: number = -(sizeToNumber(headerSize) - 1);
  let size = modularScale(scale, base, scaleRatio);
  return size * heightRatio + (relative ? 'em' : 'rem'); 
}

const HeaderStyled = styled(HeaderBase)`
  position: relative;
  /* Items inside header are center-aligned. */
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: ${p => getFontSize(p.size, p.relative, p.theme.headerBase, p.theme.scaleRatio)};
  line-height: ${p => getLineHeight(p.size, p.relative, p.theme.headerBase, p.theme.scaleRatio, p.theme.heightRatio)};

  /* Text color */
  color: ${p => p.disabled && css`#888`};
  color: ${p => !p.disabled && p.color && css`${p.color}`};

  /* Dividing */
  ${p => p.dividing && css`border-bottom: solid 1px rgba(34, 36, 38, 0.15);`}

  /* Margin: only unattached headers get margin. */
  ${p => !p.attached && css`margin: 14px 0 14px 0;`}
  ${p =>  p.attached && css`margin: 0;`}

  /* Block */
  ${p => p.block && css`
    padding: 14px;
    border: solid 1px rgba(34, 36, 38, 0.15);
    background: #f0f0f0;
    border-radius: ${p.theme.radius}px;
  `}

  /* Attachment and border: */
  /* Attached headers get a border. */
  ${p => p.attached && css`
    padding: 14px;
    border-color: rgba(34, 36, 38, 0.15);
    border-style: solid;
    border-left-width: 1px;
    border-right-width: 1px;
    /* Middle attached: Only bottom border. */
    ${p.attached && p.attached !== 'top' && p.attached !== 'bottom' && css`
      border-bottom-width: 1px;
      border-radius: none;
    `}      
    /* Top attached: Top and bottom border. */
    ${p.attached === 'top' && css`
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-left-radius: ${p.theme.radius}px;
      border-top-right-radius: ${p.theme.radius}px;
    `}
    /* Botom attached: Only bottom border. */
    ${p.attached === 'bottom' && css`
      border-bottom-width: 1px;
      border-bottom-left-radius: ${p.theme.radius}px;
      border-bottom-right-radius: ${p.theme.radius}px;
    `}      
  `}

  /* Floating */
  ${p => p.float === 'left' && css`float:left;`}
  ${p => p.float === 'right' && css`float:right;`}      

  /* Add hand cursor for clickable headers. */
  ${p => p.onClick && css`cursor:pointer;`}

  /* Any items contained inside the header get a little 
     margin to offset them from the header text. */
  & > * {
    margin-right: 8px;
  }

  /* Content alignment. */
  ${p => p.align === 'left' && css`justify-content:flex-start;`}
  ${p => p.align === 'center' && css`justify-content:center;`}
  ${p => p.align === 'right' && css`justify-content:flex-end;`}  

  /* Icon: icon emphasis */ 
  ${p => p.icon && css`
    flex-direction: column;
    justify-content: center;
    ${Icon} {
      font-size: 250%;
    }
  `}
`

//
// Header merely exists to wrap styled-component HeaderStyled;
// this way we can add static class members to Header.
//
export class Header extends React.Component<IHeaderProps, {}> {
  public static displayName = "Header";
  public static Subheader = Subheader;
  public static Content = HeaderContent;
  render() {
    return (<HeaderStyled {...this.props}></HeaderStyled>)
  }
}

(Header.Subheader as any).displayName = "Header.Subheader";
(Header.Content as any).displayName = "Header.Content";