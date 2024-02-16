import * as React from 'react';
import styled from '../../../styles/Theme';
import { css } from 'styled-components';
import { parseISO, format } from 'date-fns';

// Helpers
import { lighten } from '../../../helper/lighten';

// Other controls
import { Day } from './Day';


interface ISelectorProps {
  /** @ignore */
  className?: string;
  /** If true, do not accept future dates (beyond today). */
  nofuture?: boolean;
  value: any;
  /** If true, selector opens above the input. */
  upward: boolean;
  /** If true, selector opens to the right of the input. */
  right: boolean;
  /** Callback to call when date is selected, or selector is cancelled. */
  onSelect: any;
}

const SelectorBase = (props: ISelectorProps) => {
  // Running date, to determine which month to show.
  // If no value is specified, use today's date.
  const [date, setDate] = React.useState<Date>(props.value ? parseISO(props.value) : new Date(Date.now()));
  // Currently selected date (can be null if no selection yet)
  const [selectedDate, setSelectedDate] = React.useState<Date>(props.value ? parseISO(props.value) : null);

  // Add (and remove) document-wide event listener for keydown.
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 
  // Moves current view by specified number of months.
  // 
  const handleMove = (months: number, e: React.MouseEvent) => {
    e.stopPropagation();
    date.setMonth(date.getMonth() + months);
    setDate(new Date(date));
  }

  const handlePrevYear =  (e: React.MouseEvent) => handleMove(-12, e);
  const handleNextYear =  (e: React.MouseEvent) => handleMove(12,e );
  const handlePrevMonth = (e: React.MouseEvent) => handleMove(-1, e);
  const handleNextMonth = (e: React.MouseEvent) => handleMove(1, e);

  const handleCancel = (e?: React.MouseEvent) => {
    if(e) e.stopPropagation();
    props.onSelect(null);
  }

  const handleDayClick = (date: Date, e: React.MouseEvent) => {
    e.stopPropagation();
    props.onSelect(format(date, 'yyyy-MM-dd'));
  }

  // Close control when Escape is pressed.
  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key == 'Escape') handleCancel();
  }

  // Save today's date.
  const today = new Date(Date.now());

  // Create a date for the first day of the month.
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  // Move backwards until it's a Monday.
  while(start.getDay() !== 1) {
    start.setDate(start.getDate() - 1);
  }

  // Create a date for the last day of the month.
  let month = date.getMonth() + 1;
  if(month > 12) month = 1;
  const end = new Date(date.getFullYear(), month, 0);
  // Move forward until it's a Sunday.
  while(end.getDay() !== 0) {
    end.setDate(end.getDate() + 1);
  }

  // There should be a total of 6x7 = 42 days. If a month starts 
  // exactly on Sunday we may be a week short. Add days until 
  // there are 42.
  const timeDiff = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));     
  for(let i = 0; i < 42 - diffDays; i++) {
    end.setDate(end.getDate() + 1);
  }

  // Build array of days.
  const days = [];
  while(start.getTime() < end.getTime()) {
    days.push(<Day 
      key={start.getTime()}
      grey={start.getMonth() != date.getMonth() || (props.nofuture && start > today)} 
      selected={selectedDate &&
                selectedDate.getFullYear() === start.getFullYear() && 
                selectedDate.getMonth() === start.getMonth() &&
                selectedDate.getDate() === start.getDate()}
      today={today.getFullYear() === start.getFullYear() && 
              today.getMonth() === start.getMonth() &&
              today.getDate() === start.getDate()}
      day={start.getDate()}
      onClick={(!props.nofuture || start <= today) ? handleDayClick.bind(this, new Date(start.getTime())) : null}/>);
    start.setDate(start.getDate() + 1);
  }

  return (
    <div className={props.className}>
      <Body>
        <NavBar>
          <NavButton className="left" onClick={handlePrevYear}><use xlinkHref={"/spritemap.svg#chevron-double"}></use></NavButton>
          <NavButton className="left" onClick={handlePrevMonth}><use xlinkHref={"/spritemap.svg#chevron"}></use></NavButton>
          <NavLabel>
            <NavMonth>{date.toLocaleString(undefined, { month: 'long'})}</NavMonth>
            <NavYear>{date.getFullYear()}</NavYear>
          </NavLabel>
          <NavButton className="right" onClick={handleNextMonth}><use xlinkHref={"/spritemap.svg#chevron"}></use></NavButton>
          <NavButton className="right" onClick={handleNextYear}><use xlinkHref={"/spritemap.svg#chevron-double"}></use></NavButton>
          <NavButton className="right" onClick={handleCancel}><use xlinkHref={"/spritemap.svg#times"}></use></NavButton>
        </NavBar>
        <Month>
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => 
            <DayName key={index}>{day}</DayName>
          )}
          {days}
        </Month>
      </Body>
    </div>
  );
}

const NavButton = styled.svg`
  fill: ${p => lighten(0.3, p.theme.fontColor)};
  flex-grow: 0;
  width: 24px;
  height: 13px;
  cursor: pointer;
  transition: transform ${p => p.theme.transition.duration}s ease,
              fill ${p => p.theme.transition.duration}s ease;
  &:hover { 
    fill: ${p => p.theme.fontColor};
  }
  &.left {
    transform: scaleX(-1);  
    &:hover {
      transform: scaleX(-1.2) scaleY(1.2);
    }  
  }
  &.right {
    transform: scaleX(1);  
    &:hover {
      transform: scaleX(1.2) scaleY(1.2);
    }  
  }
`

const NavLabel = styled.div`
  flex: 1;
  text-align: center;
`

const NavMonth = styled.span`
  margin-right: 4px;
`

const NavYear = styled.span`
  font-weight: 500;  
  margin-left: 4px;
`

const NavBar = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 8px;
  border-bottom: solid 1px ${p => p.theme.normalColor};
  margin-bottom: 4px;
`

const Body = styled.div`
  position: relative;
`;

const Month = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`
const DayName = styled.div`
  width: 40px;
  text-align: center;
  line-height: 30px; /* For vertical centering */  
  font-size: 90%;
  color: #aaa;
  user-select: none;
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

export { Selector }
