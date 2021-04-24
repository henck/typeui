import * as React from 'react';
import styled from '../../../styles/Theme';
import { css } from 'styled-components';
import { format, parse } from 'date-fns';

// Helpers
import { lighten } from '../../../helper/lighten';
import { Input } from '../Input';
import { Button } from '../../Button';
import { Clock, TMode } from './Clock';
import { Label } from '../../Label';

interface ISelectorProps {
  className?: string;
  value: any;
  // If true, selector opens above the input.
  upward: boolean;
  // If true, selector opens to the right of the input.
  right: boolean;
  // If true, add a "seconds" field.
  hasSeconds: boolean;
  // If true, use 24h clock.
  is24h: boolean;
  // If true, show a clock face.
  clock: boolean;
  // Callback to call when time is selected, or selector is cancelled.
  onSelect: any;
}

interface ISelectorState {
  // Current selection mode
  mode:   TMode;
  // Currently selected time (can be null if no selection yet)
  hour:   number;
  minute: number;
  second: number;
  // AM/PM
  am:     boolean;
}

class SelectorBase extends React.Component<ISelectorProps, ISelectorState> {
  // Reference to entire control; use to find first input element to focus on.
  private wrapperElement: HTMLElement;

  constructor(props: ISelectorProps) {
    super(props);

    let time = this.props.value ? parse(this.props.value, "HH:mm:ss", new Date()): null;
    let hour = time ? time.getHours() % (this.props.is24h ? 24 : 12) : null;
    if(!props.is24h && hour == 0) hour = 12;
    this.state = {
      mode:   'hour',
      hour:   hour,
      minute: time ? time.getMinutes() : null,
      // If we have no seconds, just set them to 0.
      second: props.hasSeconds  ? (time ? time.getSeconds() : null) : 0,
      am:     time ? time.getHours() < 12 : true
    };
  }

  componentDidMount = () => {
    // On mount, focus on first input (hours).
    this.wrapperElement.querySelector('input').focus();
    this.wrapperElement.querySelector('input').select();
  }

  // Cancel and close control
  private handleCancel = (e?: React.MouseEvent) => {
    if(e) e.stopPropagation();
    this.props.onSelect(null);
  }

  // Select a time and update the input's value.
  private handleSelect = (e?: React.MouseEvent) => {
    if(e) e.stopPropagation();
    let hour = this.state.hour;
    if(!this.props.is24h && hour == 12) hour = 0;
    if(!this.props.is24h && !this.state.am) hour += 12;
    let date = new Date(1, 1, 1, hour, this.state.minute, this.state.second);
    this.props.onSelect(format(date, 'HH:mm:ss'));
  }

  private getMinHour = () => {
    return this.props.is24h ? 0 : 1;
  }

  private getMaxHour = () => {
    return this.props.is24h ? 24 : 13;
  }

  // Is the currently selected time a valid time?
  private isValid = () => {
    return this.state.hour != null   && this.state.hour >= this.getMinHour() && this.state.hour < this.getMaxHour()
        && this.state.minute != null && this.state.minute >= 0 && this.state.minute < 60
        && this.state.second != null && this.state.second >= 0 && this.state.second < 60;
  }

  // Force a value into a 0..max (exclusive) range.
  private forceRange = (value: number, min: number, max: number): number => {
    value = parseInt(value as any);
    if(isNaN(value)) value = min;
    if(value < min) return min;
    if(value >= max) return max - 1;
    return value;
  }

  private handleHour = (value: number) => {
    this.setState({ hour: this.forceRange(value, this.getMinHour(), this.getMaxHour()) });
  }

  private handleMinute = (value: number) => {
    this.setState({ minute: this.forceRange(value, 0, 60) });
  }
  
  private handleSecond = (value: number) => {
    this.setState({ second: this.forceRange(value, 0, 60) });
  }  

  private handleAM = () => {
    this.setState({ am: true });
  }

  private handlePM = () => {
    this.setState({ am: false });
  }

  private handleClock = (degrees: number, done: boolean) => {
    let value: number;
    switch(this.state.mode) {
      case 'hour':
        value = Math.round(degrees / 30);
        if(this.props.is24h) value = Math.round(degrees/15);
        value = value % this.getMaxHour();
        this.setState({ hour: this.forceRange(value, this.getMinHour(), this.getMaxHour()) });
        if(done) {
          this.wrapperElement.querySelectorAll('input')[1].focus();
          this.wrapperElement.querySelectorAll('input')[1].select();
        } else {
          this.wrapperElement.querySelectorAll('input')[0].focus();
          this.wrapperElement.querySelectorAll('input')[0].select();
        }
        break;
      case 'minute':
        value = Math.round(degrees / 6) % 60;
        this.setState({ minute: this.forceRange(value, 0, 60) });
        if(done && this.props.hasSeconds) {
          this.wrapperElement.querySelectorAll('input')[2].focus();
          this.wrapperElement.querySelectorAll('input')[2].select();
        } else {
          this.wrapperElement.querySelectorAll('input')[1].focus();
          this.wrapperElement.querySelectorAll('input')[1].select();
        }
        break;        
      case 'second':
        value = Math.round(degrees / 6) % 60;
        this.setState({ second: this.forceRange(value, 0, 60) });
        this.wrapperElement.querySelectorAll('input')[2].focus();
        this.wrapperElement.querySelectorAll('input')[2].select();
        break;        
    }
  }

  getClockValue = () => {
    switch(this.state.mode) {
      case 'hour':
        return this.state.hour * (this.props.is24h ? 15 : 30);
      case 'minute':
        return this.state.minute * 6;
      case 'second':
        return this.state.second * 6;
    }
  }

  private handleKeyDown = (e: React.KeyboardEvent) => {
    if(e.key == 'Enter' && this.isValid()) this.handleSelect();
    if(e.key == 'Escape') this.handleCancel();
  }

  render() {
    let p = this.props;

    return (
      <div className={p.className}>
        <Body ref={(el:any) => this.wrapperElement = el} onKeyDown={this.handleKeyDown}>
          <ControlBar>
            <InputBar>
            <InputHolder>
              <Input onFocus={() => this.setState({mode: "hour"})} transparent fluid maxLength={2} value={this.state.hour} placeholder="HH" onChange={this.handleHour}/>
            </InputHolder>
            <InputHolder>
              <Input onFocus={() => this.setState({mode: "minute"})} transparent fluid maxLength={2} value={this.state.minute} placeholder="mm" onChange={this.handleMinute}/>
            </InputHolder>
            {p.hasSeconds &&
              <InputHolder>
                <Input onFocus={() => this.setState({mode: "second"})} transparent fluid maxLength={2} value={this.state.second} placeholder="ss" onChange={this.handleSecond}/>
              </InputHolder>}
            </InputBar>
            {!p.is24h && <>
                <Label color={this.state.am ? "#000" : null} attached="right" onClick={this.handleAM}>AM</Label>
                <Label color={!this.state.am ? "#000" : null} attached="right" onClick={this.handlePM}>PM</Label>
              </>}
          </ControlBar>
          {p.clock && <>
            <div style={{height:'16px'}}/>
            <Clock 
              mode={this.state.mode} 
              is24h={this.props.is24h} 
              onSelect={this.handleClock} 
              degrees={this.getClockValue()}/>
            </>}
        </Body>
        <Footer>
          <Button disabled={!this.isValid()} primary onClick={this.handleSelect}>Select</Button>
          <Button secondary onClick={this.handleCancel}>Cancel</Button>
        </Footer>
      </div>
    );
  }
}

const Body = styled('div')`
  position: relative;
  padding: 14px;
  text-align: center;
`;

// Footer contains Select and Cancel buttons:
const Footer = styled('div')`
  padding: 10px;
  text-align: right;
  border-top: solid 1px ${p => p.theme.normalColor};
  background: ${p => lighten(0.1, p.theme.normalColor)};    
  border-bottom-left-radius: ${p => p.theme.radius}px;
  border-bottom-right-radius: ${p => p.theme.radius}px;
`

// ControlBar aligns inputs and AM/PM labels in a row:
const ControlBar = styled('div')`
  display: inline-flex;
  border: solid 1px ${p => p.theme.normalColor};
  border-radius: ${p => p.theme.radius}px;
  transition: border-color ${p => p.theme.transition.duration}s ease;
  &:focus-within { 
    border-color: ${p => lighten(0.25, p.theme.primaryColor)};  
  }
`

// InputBar aligns inputs in a row. These are in a div of their
// own so that we can do last-child on them.
const InputBar = styled('div')`
  display: inline-flex;
`

// Wraps an input, adding ":" after it.
const InputHolder = styled('div')`
  position: relative;
  width: 59px;
  &:not(:last-child):after {
    content: ':';
    position: absolute;
    z-index: 1;
    right: -8px;
    top: 6px;
  }
  input {
    text-align: right;
  }
`

const Selector = styled(SelectorBase)`
  position: absolute;
  width: 302px;
  box-sizing: border-box;
  background: ${p => p.theme.background};
  border: solid 1px ${p => p.theme.normalColor};
  border-radius: ${p => p.theme.radius}px;
  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;
  cursor: auto; /* Unset cursor set by parent input */
  color: ${p => p.theme.fontColor}; /* Unset color set by parent input */

  /* Positioning. */
  z-index: 99; /* Must be positioned over everything else */
  ${p => p.right && css`right: 0;`}
  ${p => !p.right && css`left: 0;`}
  ${p => p.upward && css`bottom: 42px;`}
  ${p => !p.upward && css`top: 42px;`}

  ${p => p.right && p.upward && css`transform-origin: bottom right;`}
  ${p => !p.right && p.upward && css`transform-origin: bottom left;`}
  ${p => p.right && !p.upward && css`transform-origin: top right;`}
  ${p => !p.right && !p.upward && css`transform-origin: top left;`}

  &.fade-enter {
    opacity: 0.01;
    transform: scale(0.01);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms ease-out;
  }
  &.fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit-active {
    opacity: 0.01;
    transform: scale(0.01);
    transition: all 300ms ease-in;
  }
`

export { Selector };
