import * as React from 'react';
import styled from '../../../styles/Theme';
import { css } from 'styled-components';
import { parseISO, format } from 'date-fns';

// Helpers
import { lighten } from '../../../helper/lighten';

// Other controls
import { Day } from './Day';


interface ISelectorProps {
  className?: string;
  // If true, do not accept future dates (beyond today).
  nofuture?: boolean;
  value: any;
  // If true, selector opens above the input.
  upward: boolean;
  // If true, selector opens to the right of the input.
  right: boolean;
  // Callback to call when date is selected, or selector is cancelled.
  onSelect: any;
}

interface ISelectorState {
  // Running date, to determine which month to show
  date: Date,
  // Currently selected date (can be null if no selection yet)
  selectedDate: Date
}

class SelectorBase extends React.Component<ISelectorProps, ISelectorState> {
  constructor(props: ISelectorProps) {
    super(props);
    // If no value is specified, use today's date.
    this.state = {
      date: this.props.value ? parseISO(this.props.value) : new Date(Date.now()),
      selectedDate: this.props.value ? parseISO(this.props.value) : null 
    };
  }

  // 
  // Moves current view by specified number of months.
  // 
  private handleMove = (months: number, e: React.MouseEvent) => {
    e.stopPropagation();
    this.setState((prevState) => {
      prevState.date.setMonth(prevState.date.getMonth() + months);
      return {
        date: prevState.date
      };
    });
  }

  private handlePrevYear =  (e: React.MouseEvent) => this.handleMove(-12, e);
  private handleNextYear =  (e: React.MouseEvent) => this.handleMove(12,e );
  private handlePrevMonth = (e: React.MouseEvent) => this.handleMove(-1, e);
  private handleNextMonth = (e: React.MouseEvent) => this.handleMove(1, e);

  private handleCancel = (e?: React.MouseEvent) => {
    if(e) e.stopPropagation();
    this.props.onSelect(null);
  }

  private handleDayClick(date: Date, e: React.MouseEvent) {
    e.stopPropagation();
    this.props.onSelect(format(date, 'yyyy-MM-dd'));
  }

  private handleKeyDown = (e: React.KeyboardEvent) => {
    console.log(e.key);
    if(e.key == 'Escape') this.handleCancel();
  }

  render() {
    let p = this.props;

    // Save today's date.
    let today = new Date(Date.now());

    // Create a date for the first day of the month.
    let start = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), 1);
    // Move backwards until it's a Monday.
    while(start.getDay() !== 1) {
      start.setDate(start.getDate() - 1);
    }

    // Create a date for the last day of the month.
    let month = this.state.date.getMonth() + 1;
    if(month > 12) month = 1;
    let end = new Date(this.state.date.getFullYear(), month, 0);
    // Move forward until it's a Sunday.
    while(end.getDay() !== 0) {
      end.setDate(end.getDate() + 1);
    }

    // There should be a total of 6x7 = 42 days. If a month starts 
    // exactly on Sunday we may be a week short. Add days until 
    // there are 42.
    var timeDiff = Math.abs(end.getTime() - start.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));     
    for(let i = 0; i < 42 - diffDays; i++) {
      end.setDate(end.getDate() + 1);
    }

    // Build array of days.
    let days = [];
    while(start.getTime() < end.getTime()) {
      days.push(<Day 
        key={start.getTime()}
        grey={start.getMonth() != this.state.date.getMonth() || (p.nofuture && start > today)} 
        selected={this.state.selectedDate &&
                  this.state.selectedDate.getFullYear() === start.getFullYear() && 
                  this.state.selectedDate.getMonth() === start.getMonth() &&
                  this.state.selectedDate.getDate() === start.getDate()}
        today={today.getFullYear() === start.getFullYear() && 
               today.getMonth() === start.getMonth() &&
               today.getDate() === start.getDate()}
        day={start.getDate()}
        onClick={(!p.nofuture || start <= today) ? this.handleDayClick.bind(this, new Date(start.getTime())) : null}/>);
      start.setDate(start.getDate() + 1);
    }

    return (
      <div className={p.className}>
        <Body onKeyDown={this.handleKeyDown}>
          <NavBar>
            <NavButtonLeft onClick={this.handlePrevYear}><use xlinkHref={"spritemap.svg#chevron-double"}></use></NavButtonLeft>
            <NavButtonLeft onClick={this.handlePrevMonth}><use xlinkHref={"spritemap.svg#chevron"}></use></NavButtonLeft>
            <NavLabel>
              <NavMonth>{this.state.date.toLocaleString(undefined, { month: 'long'})}</NavMonth>
              <NavYear>{this.state.date.getFullYear()}</NavYear>
            </NavLabel>
            <NavButtonRight onClick={this.handleNextMonth}><use xlinkHref={"spritemap.svg#chevron"}></use></NavButtonRight>
            <NavButtonRight onClick={this.handleNextYear}><use xlinkHref={"spritemap.svg#chevron-double"}></use></NavButtonRight>
            <NavButtonRight onClick={this.handleCancel}><use xlinkHref={"spritemap.svg#times"}></use></NavButtonRight>
          </NavBar>
          <Month>
            <DayName>Mo</DayName>
            <DayName>Tu</DayName>
            <DayName>We</DayName>
            <DayName>Th</DayName>
            <DayName>Fr</DayName>
            <DayName>Sa</DayName>
            <DayName>Su</DayName>
            {days}
          </Month>
        </Body>
      </div>
    );
  }
}

const NavButton = styled('svg')`
  fill: ${p => lighten(0.3, p.theme.fontColor)};
  flex-grow: 0;
  width: 24px;
  height: 13px;
  cursor: pointer;
  transition: transform ${p => p.theme.transition.duration}s ease,
              fill ${p => p.theme.transition.duration}s ease;
`

const NavButtonLeft = styled(NavButton)`
  transform: scaleX(-1);  
  &:hover {
    fill: ${p => p.theme.fontColor};
    transform: scaleX(-1.2) scaleY(1.2);
  }  
`

const NavButtonRight = styled(NavButton)`
  transform: scaleX(1);  
  &:hover {
    fill: ${p => p.theme.fontColor};
    transform: scaleX(1.2) scaleY(1.2);
  }  
`

const NavLabel = styled('div')`
  flex: 1;
  text-align: center;
`

const NavMonth = styled('span')`
  margin-right: 4px;
`

const NavYear = styled('span')`
  font-weight: 500;  
  margin-left: 4px;
`

const NavBar = styled('div')`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 8px;
  border-bottom: solid 1px ${p => p.theme.normalColor};
  margin-bottom: 4px;
`

const Body = styled('div')`
  position: relative;
`;

const Month = styled('div')`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`
const DayName = styled('div')`
  width: 40px;
  text-align: center;
  line-height: 30px; /* For vertical centering */  
  font-size: 90%;
  color: #aaa;
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
