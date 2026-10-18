import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../../styles/Theme';
import { css } from 'styled-components';
import { parseISO, format } from 'date-fns';
// Helpers
import { lighten } from '../../../helper/lighten';
// Other controls
import { Day } from './Day';
const SelectorBase = (props) => {
    // Running date, to determine which month to show.
    // If no value is specified, use today's date.
    const [date, setDate] = React.useState(props.value ? parseISO(props.value) : new Date(Date.now()));
    // Currently selected date (can be null if no selection yet)
    const [selectedDate, setSelectedDate] = React.useState(props.value ? parseISO(props.value) : null);
    // Add (and remove) document-wide event listener for keydown.
    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);
    // 
    // Moves current view by specified number of months.
    // 
    const handleMove = (months, e) => {
        e.stopPropagation();
        date.setMonth(date.getMonth() + months);
        setDate(new Date(date));
    };
    const handlePrevYear = (e) => handleMove(-12, e);
    const handleNextYear = (e) => handleMove(12, e);
    const handlePrevMonth = (e) => handleMove(-1, e);
    const handleNextMonth = (e) => handleMove(1, e);
    const handleCancel = (e) => {
        if (e)
            e.stopPropagation();
        props.onSelect(null);
    };
    const handleDayClick = (date, e) => {
        e.stopPropagation();
        props.onSelect(format(date, 'yyyy-MM-dd'));
    };
    // Close control when Escape is pressed.
    const handleKeyDown = (e) => {
        if (e.key == 'Escape')
            handleCancel();
    };
    // Save today's date.
    const today = new Date(Date.now());
    // Create a date for the first day of the month.
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    // Move backwards until it's a Monday.
    while (start.getDay() !== 1) {
        start.setDate(start.getDate() - 1);
    }
    // Create a date for the last day of the month.
    let month = date.getMonth() + 1;
    if (month > 12)
        month = 1;
    const end = new Date(date.getFullYear(), month, 0);
    // Move forward until it's a Sunday.
    while (end.getDay() !== 0) {
        end.setDate(end.getDate() + 1);
    }
    // There should be a total of 6x7 = 42 days. If a month starts 
    // exactly on Sunday we may be a week short. Add days until 
    // there are 42.
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    for (let i = 0; i < 42 - diffDays; i++) {
        end.setDate(end.getDate() + 1);
    }
    // Build array of days.
    const days = [];
    while (start.getTime() < end.getTime()) {
        days.push(_jsx(Day, { grey: start.getMonth() != date.getMonth() || (props.nofuture && start > today), selected: selectedDate &&
                selectedDate.getFullYear() === start.getFullYear() &&
                selectedDate.getMonth() === start.getMonth() &&
                selectedDate.getDate() === start.getDate(), today: today.getFullYear() === start.getFullYear() &&
                today.getMonth() === start.getMonth() &&
                today.getDate() === start.getDate(), day: start.getDate(), onClick: (!props.nofuture || start <= today) ? handleDayClick.bind(this, new Date(start.getTime())) : null }, start.getTime()));
        start.setDate(start.getDate() + 1);
    }
    return (_jsx("div", { className: props.className, ref: props.nodeRef, children: _jsxs(Body, { children: [_jsxs(NavBar, { children: [_jsx(NavButton, { className: "left", onClick: handlePrevYear, children: _jsx("use", { xlinkHref: "/spritemap.svg#chevron-double" }) }), _jsx(NavButton, { className: "left", onClick: handlePrevMonth, children: _jsx("use", { xlinkHref: "/spritemap.svg#chevron" }) }), _jsxs(NavLabel, { children: [_jsx(NavMonth, { children: date.toLocaleString(undefined, { month: 'long' }) }), _jsx(NavYear, { children: date.getFullYear() })] }), _jsx(NavButton, { className: "right", onClick: handleNextMonth, children: _jsx("use", { xlinkHref: "/spritemap.svg#chevron" }) }), _jsx(NavButton, { className: "right", onClick: handleNextYear, children: _jsx("use", { xlinkHref: "/spritemap.svg#chevron-double" }) }), _jsx(NavButton, { className: "right", onClick: handleCancel, children: _jsx("use", { xlinkHref: "/spritemap.svg#times" }) })] }), _jsxs(Month, { children: [["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => _jsx(DayName, { children: day }, index)), days] })] }) }));
};
const NavButton = styled.svg `
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
`;
const NavLabel = styled.div `
  flex: 1;
  text-align: center;
`;
const NavMonth = styled.span `
  margin-right: 4px;
`;
const NavYear = styled.span `
  font-weight: 500;  
  margin-left: 4px;
`;
const NavBar = styled.div `
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 8px;
  border-bottom: solid 1px ${p => p.theme.normalColor};
  margin-bottom: 4px;
`;
const Body = styled.div `
  position: relative;
`;
const Month = styled.div `
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;
const DayName = styled.div `
  width: 40px;
  text-align: center;
  line-height: 30px; /* For vertical centering */  
  font-size: 90%;
  color: #aaa;
  user-select: none;
`;
const Selector = styled(SelectorBase) `
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
  ${p => p.right && css `right: 0;`}
  ${p => !p.right && css `left: 0;`}
  ${p => p.upward && css `bottom: 42px;`}
  ${p => !p.upward && css `top: 42px;`}

  ${p => p.right && p.upward && css `transform-origin: bottom right;`}
  ${p => !p.right && p.upward && css `transform-origin: bottom left;`}
  ${p => p.right && !p.upward && css `transform-origin: top right;`}
  ${p => !p.right && !p.upward && css `transform-origin: top left;`}

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
`;
export { Selector };
