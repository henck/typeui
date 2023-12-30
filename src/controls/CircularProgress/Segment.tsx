import * as React from 'react';
import styled from '../../styles/Theme';

interface IProps {
  /** @ignore */
  className?: string;
  /**
   * Segment color. Defaults to theme primary color.
   */
  color?: string;
  /**
   * Size of segment in degrees.
   */
  angleBody: number;     
  /**
   * OFfset of segment in degrees.
   */
  angleOffset: number;
}

const SegmentBase = (props: IProps) =>
  <div className={props.className}/>

// 120 => skew -30
// 100 => skew -10
// 90  => skew 0
// 80  => skew 10
// 70  => skew 20
// 60  => skew 30
// 50  => skew 40
// 
// ==> 90 - angle

const Segment = styled(SegmentBase).attrs(p => ({
  skew: (90 - p.angleBody),
}))`
  position: absolute;
  top: 50%; left: 50%;          /* Rectangle is placed at center of parent circle */
  width: 100vw; height: 100vw;  /* Extremely large rectangle fills any circle size */
  
  background: ${p => p.color ? p.color : p.theme.primaryColor};
  
  transform: rotate(${p => p.angleOffset - 90}deg) skew(${p => p.skew}deg);
  /* Transform around top-left corner of rectangle */
  transform-origin: 0 0;
`

export { Segment }
