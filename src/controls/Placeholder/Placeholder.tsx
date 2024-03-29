import * as React from 'react';
import styled from '../../styles/Theme';
import { keyframes, css } from 'styled-components';

// Other controls
import { PlaceholderParagraph } from './PlaceholderParagraph';
import { PlaceholderImage } from './PlaceholderImage';
import { PlaceholderHeader } from './PlaceholderHeader';
import { PlaceholderLine } from './PlaceholderLine';

interface IPlaceholderProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * A fluid placeholder fills the width of its container. 
   * @default false
   */
  fluid?: boolean;
}

const PlaceholderBase = (props: IPlaceholderProps) =>
  <div className={props.className}>
    {props.children}
    <div></div>
  </div>

// Background animation
const shimmer = keyframes`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`;

const PlaceholderStyled = styled(PlaceholderBase)`
  position: relative;
  z-index: 0;
  overflow: hidden;

  /* Fluid */
  ${p => !p.fluid && css`max-width: 420px;`}

  /* Background animation. 
     This is done using an underlying absolute positioned div, which is transformed, 
     rather than using background-position animation. This way, the animation is 
     smoother and GPU-accelerated. */
  & > div:last-child {
    position: absolute;
    left: 0;
    top: 0;
    right: -150%;
    bottom: 0;
    z-index: -1;
    background-color: #fff;
    background-image: linear-gradient(to right, rgba(0,0,0,0.08) 0px, rgba(0, 0, 0, 0.08) 43%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.08) 57%);
    animation: ${shimmer} 1s linear infinite;                
  }
`;

/**
 * A Placeholder can contain a Placeholder.Header as well as Placeholder.Paragraph elements. 
 * Any PlaceHolder.Line elements have random lengths by default, unless a length is specified. 
 * The background animation is done using CSS transforms so that it can be smooth and 
 * GPU-accelerated.
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-placeholder--properties
 */
const Placeholder = (props: IPlaceholderProps) => <PlaceholderStyled {...props}/>;

Placeholder.Paragraph = PlaceholderParagraph;
Placeholder.Image = PlaceholderImage;
Placeholder.Header = PlaceholderHeader;
Placeholder.Line = PlaceholderLine;

export { Placeholder }
