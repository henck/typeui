import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

type TLineLength = 'full' | 'long' | 'medium' | 'short';

interface IPlaceholderLineProps {
  className?: string;
  /** Length of line: 'full', 'long', 'medium' or 'short'. If not provided,
      then the length will be randomized. */
  length?: TLineLength;
  /** A tall line is a little higher than a normal line. */
  tall?: boolean;
}

class PlaceholderLineBase extends React.Component<IPlaceholderLineProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}></div>
    );
  }
}

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
class PlaceholderLine extends React.Component<IPlaceholderLineProps, {}> {
  private length: TLineLength;

  constructor(props: IPlaceholderLineProps) {
    super(props);

    // If length is not specified, then pick a random length for the line.
    let lengths: TLineLength[] =  ['short','medium','long','full'];
    let randomLength = lengths[Math.floor(Math.random() * lengths.length)];
    this.length = props.length || randomLength;
  }

  render() {
    return (
      <PlaceholderLineStyled {...this.props} length={this.length}/>
    );
  }
}

export { PlaceholderLine };