import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { Segment } from './Segment'
import { InnerCircle } from './InnerCircle';
import { Dot } from './Dot';
import { alpha } from '../../helper/alpha';
import { darken } from '../../helper/darken';
import { Value } from './Value';

const DEFAULT_RADIUS = 50;
const DEFAULT_THICKNESS = 8;

interface ICircularProgressProps {
  /** @ignore */
  className?: string;
  /** 
   * Progress percentage value.
   * This must be a value between 0 and 100.
   */
  value: number;
  /** 
   * Progress line color. Defaults to primary theme color. 
   */
  color?: string;
  /** 
   * Circle radius. Defaults to 50px. 
   * @default 50
   */
  radius?: number;  
  /** 
   * Line thickness. Defaults to 8px. 
   * @default 8
   */
  thickness?: number;
  /** 
   * If set, line gets a background. 
   * @default false 
   */
  background?: boolean;
  /** 
   * If set, line is rounded at ends. 
   * @default false
   */
  rounded?: boolean;
  /** 
   * If set, line and text get edge drop shadow. 
   * @default false
   */
  raised?: boolean;
  /** 
   * If set, progress line animates when it first appears. 
   * @default false 
   */
  animated?: boolean;
  /** 
   * A padded CircularProgress has a margin around it. 
   * @default false 
   */
  padded?: boolean;
  /**
   * Font size factor compared to inherited font size. Defaults to 1. 
   * Use 2 to increase font size 2x.
   */
  fontFactor?: number;
  /**
   * Fired when control is clicked. Control is only interactive
   * if this event handler has a value.
   */
  onClick?: () => void;
}

/** Duration of a single animation step, in ms: */
const ANIMATION_DELAY = 10; 

const CircularProgressBase = (props: ICircularProgressProps) => {
  // Animation timer interval.
  let intervalID: number;
  // Current value. Static value if no animation (copied from props.value),
  // or running value if animation.
  const [value, setValue] = React.useState<number>(props.animated ? 0 : Math.max(Math.min(100, props.value), 0));

  React.useEffect(() => {
    // If circle is animated, start animation timer.
    if(props.animated) {
      intervalID = window.setInterval(animate, ANIMATION_DELAY);
    }
    return () => {
      // Clear animation timer (if any).
      window.clearInterval(intervalID);
    }
  }, []);

  const animate = () => {
    // Animation step size. Larger progress values animate faster so that all 
    // animations end at the same time.
    const step: number = props.value / 40;     

    // Animate by increasing state value, until prop value is reached.
    setValue(prevValue => {
      let newValue = Math.max(Math.min(prevValue + step, 100), 0);
      if(newValue >= props.value) {
        newValue = props.value;
        clearInterval(intervalID);
      }
      return newValue;
    });
  }

  const radius = props.radius ??  DEFAULT_RADIUS;
  const thickness = props.thickness ?? DEFAULT_THICKNESS;
  const degrees = 360 / 100 * value;
  const q1 = Math.min(degrees, 95);
  const q2 = Math.max(0, Math.min(degrees - 90, 95));
  const q3 = Math.max(0, Math.min(degrees - 180, 95));
  const q4 = Math.max(0, Math.min(degrees - 270, 95));

  // Dot calculations:
  const middleRadius = radius - thickness / 2;
  const rad = (360 / 100 * Math.min(100,Math.max(value, 0)) - 90) * Math.PI/180

  return (
    <div className={props.className} onClick={props.onClick}>
      {/* main circle */}
      <div>
        <Segment angleOffset={0}   angleBody={q1} color={props.color}/>
        <Segment angleOffset={90}  angleBody={q2} color={props.color}/>
        <Segment angleOffset={180} angleBody={q3} color={props.color}/>
        <Segment angleOffset={270} angleBody={q4} color={props.color}/>
        <InnerCircle radius={radius - thickness} raised={props.raised}/>
        <Value raised={props.raised} fontFactor={props.fontFactor}>{Math.round(value)}%</Value>
      </div>
      {/* If rounded, show rounded dots at start and end of line. */}
      {props.rounded && <Dot color={props.color} left={radius} top={radius - middleRadius} thickness={thickness} />}
      {props.rounded && <Dot color={props.color} left={radius + middleRadius * Math.cos(rad)} top={radius + middleRadius * Math.sin(rad)} thickness={thickness} />}
    </div>
  );
}

const CircularProgressStyled = styled(CircularProgressBase).attrs(p => ({
  outerRadius: p.radius ? p.radius : DEFAULT_RADIUS,
  innerRadius: (p.radius ? p.radius : DEFAULT_RADIUS) - (p.thickness ? p.thickness : DEFAULT_THICKNESS),
  middleRadius: (p.radius ? p.radius : DEFAULT_RADIUS) - (p.thickness ? p.thickness : DEFAULT_THICKNESS) / 2,
  actualThickness: p.thickness ? p.thickness : DEFAULT_THICKNESS,
  rad: (360 / 100 * Math.min(100,Math.max(p.value, 0)) - 90) * Math.PI/180
}))`
  position: relative;
  display: inline-block;
  user-select: none;
  ${p => p.onClick != null && css`cursor: pointer`};
  ${p => p.padded && css`margin: 10px;`}
  /* main circle */
  & > div:nth-child(1) {
    position: relative;
    width: ${p => p.outerRadius * 2}px;
    height: ${p => p.outerRadius * 2}px;
    background: ${p => p.background ? p.theme.normalColor : 'transparent'};
    border-radius: 50%;
    overflow: hidden;
    ${p => p.raised && css`box-shadow: ${p => alpha(0.5, darken(0.5, p.theme.normalColor))} 0px 0px 2px 2px;`}
  }
`

/**
 * A CircularProgress shows a circular progress meter that is optionally animated.
 * 
 * @example 
 * <CircularProgress animated color="hotpink" padded raised value={15}/>
 * <CircularProgress animated background padded raised value={90}/>
 * <CircularProgress animated background color="crimson" padded raised rounded value={48}/>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-circularprogress--properties
 */
const CircularProgress = (props: ICircularProgressProps) =>
  <CircularProgressStyled{...props}/>

export { CircularProgress, ICircularProgressProps }
