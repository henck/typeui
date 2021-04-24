import * as React from 'react';
import styled from '../../../styles/Theme';
import { ClockNumber } from './ClockNumber';
import { Arrow } from './Arrow';

// Current selection mode
type TMode = 'hour' | 'minute' | 'second';

interface IProps {
  className?: string;
  value: number; // 0..359
  onSelect: (value: number, done: boolean) => void;
  mode: TMode;
  is24h?: boolean;
}

interface IState {
  // Is arrow animation currenly on? When clock mode is switched (hours to minutes etc.),
  // animation is enabled. When the mouse is used to move the selector, animation is disabled.
  arrow_animation: boolean;
}

class ClockBase extends React.Component<IProps, IState> {
  private faceElement: HTMLElement;
  private mouseDown: boolean = false;

  constructor(props: IProps) {
    super(props);
    this.state = {
      arrow_animation: false
    }
  }

  componentDidUpdate = (newProps: IProps) => {
    if(newProps.mode != this.props.mode) this.setState({ arrow_animation: true });
  }

  // Convert a mouse location to degrees on the clockface.
  private eventToDeg = (e: React.MouseEvent) => {
    let rect = this.faceElement.getBoundingClientRect();
    let x = (e.clientX - rect.left) - rect.width / 2;
    let y = -((e.clientY - rect.top) - rect.height / 2);
    let deg = -Math.atan2(y,x) * 180 / Math.PI + 180 - 90;
    if(deg < 0) deg += 360;
    return deg;
  }  

  private handleMouseDown = () => {
    this.mouseDown = true;
    this.faceElement.classList.add('move');
    this.setState({ arrow_animation: false });
  }

  private handleMouseUp = (e: React.MouseEvent) => {
    this.mouseDown = false;
    this.faceElement.classList.remove('move');
    this.props.onSelect(this.eventToDeg(e), true);
  }

  private handleMouseLeave = () => {
    this.mouseDown = false;
    this.faceElement.classList.remove('move');
  }

  private handleMouseMove = (e: React.MouseEvent) => {
    if(this.mouseDown) this.props.onSelect(this.eventToDeg(e), false);
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        <ClockFace ref={(el:any) => this.faceElement = el} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}>
          <Arrow animation={this.state.arrow_animation} deg={p.value}/>
          {p.mode == 'hour' && !p.is24h && [12,1,2,3,4,5,6,7,8,9,10,11].map((v, index) => 
            <ClockNumber active={p.value == (v * 30) % 360} key={index} value={v.toString()} degrees={v * 30}/>
          )}
          {p.mode == 'hour' && p.is24h && [0,1,2,3,4,5,6,7,8,9,10,11].map((v, index) => 
            <ClockNumber active={p.value == (v * 30) % 360} key={index} value={(v * 2).toString()} degrees={v * 30}/>
          )}
          {p.mode != 'hour' && [0,5,10,15,20,25,30,35,40,45,50,55].map((v, index) => 
            <ClockNumber active={p.value == (v * 6) % 360} key={index} value={v.toString().padStart(2, "0")} degrees={v * 6}/>
          )}
          <Center/>
        </ClockFace>
      </div>
    )
  }
}

const ClockFace = styled('div')`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 0;            /* hack to keep clock face ratio 1:1 */
  padding-bottom: 100%;
  border-radius: 50%;
  background: ${p => p.theme.normalColor};
  cursor: pointer;
  &.move {
    cursor: move;
  }
`

const Clock = styled(ClockBase) `
  position: relative;
  margin: 0 auto;    /* center clock */
  max-width: 200px;  /* max clock size */
`

const Center = styled('div')`
  position: absolute;
  left: calc(50% - 3px);
  top: calc(50% - 3px);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${p => p.theme.primaryColor};
`

export { Clock, TMode }