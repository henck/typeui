import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { Segment } from './Segment'
import { InnerCircle } from './InnerCircle';
import { Dot } from './Dot';

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
   * If set, line gets a grey background. 
   * @default false 
   */
  background?: boolean;
  /** 
   * If set, line is rounded at ends. 
   * @default false
   */
  rounded?: boolean;
  /** 
   * If set, line gets edge drop shadow. 
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
}

interface ICircularProgressState {
  value: number;
}

class CircularProgressBase extends React.Component<ICircularProgressProps, ICircularProgressState> {
  // Animation timer interval.
  private interval: any;
  // Animation step size. Larger progress values animate faster so that all animations end at the same time.
  private step: number; 

  constructor(props: ICircularProgressProps) {
    super(props);
    this.step = props.value / 40;
    this.state = {
      value: props.animated ? 0 : Math.max(Math.min(100, props.value), 0)
    }
  }

  componentDidMount() {
    // If circle is animated, start animation timer.
    if(this.props.animated) {
      this.interval = setInterval(this.animate, 10);
    }
  }

  componentWillUnmount() {
    // Clear animation timer (if any).
    clearInterval(this.interval);
  }

  animate = () => {
    // Animate by increasing state value, until prop value is reached.
    if(this.state.value < this.props.value) {
      this.setState({ value: this.state.value + this.step})
    } else {
      // Clear animation timer at end of animation.
      clearInterval(this.interval);
    } 
  }

  render() {
    let p = this.props;
    let radius = p.radius ? p.radius :  DEFAULT_RADIUS;
    let thickness = p.thickness ? p.thickness : DEFAULT_THICKNESS;
    let value = Math.max(Math.min(this.state.value, 100), 0);
    let degrees = 360 / 100 * value;
    let q1 = Math.min(degrees, 95);
    let q2 = Math.max(0, Math.min(degrees - 90, 95));
    let q3 = Math.max(0, Math.min(degrees - 180, 95));
    let q4 = Math.max(0, Math.min(degrees - 270, 95));

    // Dot calculations:
    const middleRadius = radius - thickness / 2;
    const rad = (360 / 100 * Math.min(100,Math.max(this.state.value, 0)) - 90) * Math.PI/180

    return (
      <div className={p.className}>
        {/* main circle */}
        <div>
          <Segment angleOffset={0}   angleBody={q1} color={p.color}/>
          <Segment angleOffset={90}  angleBody={q2} color={p.color}/>
          <Segment angleOffset={180} angleBody={q3} color={p.color}/>
          <Segment angleOffset={270} angleBody={q4} color={p.color}/>
          <InnerCircle radius={radius - thickness} raised={p.raised}/>
          <Value>{Math.round(value)}%</Value>
        </div>
        {/* underlying dropshadow circle */}
        <div></div>
        {/* If rounded, show rounded dots at start and end of line. */}
        {p.rounded && <Dot color={p.color} left={radius} top={radius - middleRadius} thickness={thickness} />}
        {p.rounded && <Dot color={p.color} left={radius + middleRadius * Math.cos(rad)} top={radius + middleRadius * Math.sin(rad)} thickness={thickness} />}
      </div>
    );
  }
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
  ${p => p.padded && css`margin: 10px;`}
  /* main circle */
  & > div:nth-child(1) {
    position: relative;
    width: ${p => p.outerRadius * 2}px;
    height: ${p => p.outerRadius * 2}px;
    background: ${p => p.background ? '#eee' : 'transparent'};
    border-radius: 50%;
    overflow: hidden;
  }
  /* underlying circle, 1px smaller than main circle, used to produce dropshadow */
  & > div:nth-child(2) {
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${p => p.outerRadius * 2 - 2}px;
    height: ${p => p.outerRadius * 2 - 2}px;
    transform: translateX(-50%) translateY(-50%);
    background: transparent;
    border-radius: 50%;
    ${p => p.raised && css`box-shadow: rgba(34, 36, 38, 0.15) 0px 0px 2px 2px;`}
  }
`

/**
 * Numeric value to show in center of control.
 */
const Value = styled.div`
  position: absolute;
  font-size: 180%;
  font-weight: 500;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
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
class CircularProgress extends React.Component<ICircularProgressProps> {
  render = () => <CircularProgressStyled{...this.props}></CircularProgressStyled>
}

export { CircularProgress };