import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

type TLineLength = 'full' | 'long' | 'medium' | 'short';

interface IPlaceholderLineProps {
  /** @ignore */
  className?: string;
  /** 
   * Length of line: 'full', 'long', 'medium' or 'short'. If not provided,
   * then the length will be randomized. 
   */
  length?: TLineLength;
  /** 
   * A tall line is a little higher than a normal line. 
   * @default false
   */
  tall?: boolean;
}

const PlaceholderLineBase = (props: IPlaceholderLineProps) =>
  <div className={props.className}></div>

/* Spacing between lines */
const LineSpacing: number = 12;
/* Height of a standard line */
const LineHeight: number = 7;
/* Extra height for tall line */
const TallExtra: number = 2;

const PlaceholderLineStyled = styled(PlaceholderLineBase).attrs(p => ({
  lineSpacing: LineSpacing,
  height: p.tall ? (LineHeight + TallExtra) : (LineHeight)
}))`
  /* The base line is white. It is the area above the see-through
     line. It serves as a reference point for :before and
     :after which draw the actual see-through line. */
  position: relative;
  background: #fff;

  /* Spacing between lines
     The white spacing block has zero height for the last line in
     a collection of lines. */
  height: 0px;
  &:not(:last-child) {  height: ${p => p.lineSpacing}px; }

  /* Line height */
  margin-top: ${p => p.height}px;

  /* :after draws a white area over the line, in order 
     to shorten the see-through line to the desired length. */
  &:after {
    content: '';
    position: absolute;
    ${p => p.length === 'full' && css`left: 100%;`}
    ${p => p.length === 'long' && css`left: 75%;`}
    ${p => p.length === 'medium' && css`left: 50%;`}
    ${p => p.length === 'short' && css`left: 25%;`}
    right: 0;
    top: -${p => p.height}px;
    height: ${p => p.height}px;
    background: #fff;
  }
`;

//
// PlaceholderLine is a thin wrapper that defers all work to PlaceholderLineBase. 
// It does this so that it can set a default (random) value for the length prop
// if it wasn't specified.
//
const PlaceholderLine = (props: IPlaceholderLineProps) => {
  const getLength = () => {
    const lengths: TLineLength[] =  ['short','medium','long','full'];
    const randomLength = lengths[Math.floor(Math.random() * lengths.length)];
    return props.length || randomLength;
  }
  
  const length = React.useRef<TLineLength>(getLength());

  return <PlaceholderLineStyled {...props} length={length.current}/>;
}

export { PlaceholderLine, IPlaceholderLineProps }
