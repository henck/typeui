import * as React from 'react';
import styled from '../../../styles/Theme';
import { css } from 'styled-components';

interface IProps {
  /** @ignore */
  className?: string;
  grey: boolean;
  selected: boolean;
  today: boolean;
  day: number;
  onClick?: () => void;
}

const DayBase = (props: IProps) => 
  <div className={props.className} onClick={props.onClick}>
    {props.day}
  </div>

const Day = styled(DayBase)`
  box-sizing: border-box;
  width: 40px;
  text-align: center;
  line-height: 30px; /* For vertical centering */
  cursor: pointer;
  background: ${p => p.theme.background};
  border: solid 1px ${p => p.theme.background};
  border-radius: ${p => p.theme.radius}px;

  /* Grey dates do not belong to the current month. */
  ${p => p.grey && css`color: #aaa;`}

  /* Highlight today's date and selected date. */
  ${p => (p.today || p.selected) && css`
    font-weight: 500;
  `}
  ${p => p.today && css`
    background: ${p.theme.normalColor};
  `}
  ${p => p.selected && css`
    color: #fff;
    background: ${p.theme.primaryColor};
  `}  

  /* Lift element up when hovered. */
  transition: transform ${p => p.theme.transition.duration}s ease,
              box-shadow ${p => p.theme.transition.duration}s ease,
              border-color ${p => p.theme.transition.duration}s ease;
  z-index: 0;  
  &:hover {
    z-index: 1;
    transform: scaleX(1.4) scaleY(1.4);
    ${p => !p.today && !p.selected && css`border-color: #eee;`}
    box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;
  }
`

export { Day }
