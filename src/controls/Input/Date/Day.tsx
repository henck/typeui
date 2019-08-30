import * as React from 'react';
import styled from '../../../styles/Theme';
import { css } from 'styled-components';

interface IDayProps {
  className?: string;
  grey: boolean;
  selected: boolean;
  today: boolean;
  day: number;
  onClick?: any;
}

class DayBase extends React.Component<IDayProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className} onClick={p.onClick}>
        {p.day}
      </div>
    );
  }
}

const Day = styled(DayBase)`
  box-sizing: border-box;
  width: 40px;
  text-align: center;
  line-height: 30px; /* For vertical centering */
  cursor: pointer;
  background: #fff;
  border: solid 1px #fff;
  border-radius: ${p => p.theme.radius}px;

  /* Grey dates do not belong to the current month. */
  ${p => p.grey && css`color: #aaa;`}

  /* Highlight today's date and selected date. */
  ${p => (p.today || p.selected) && css`
    color: #fff;
    font-weight: 500;
  `}
  ${p => p.today && css`
    background: ${p.theme.primaryColor};
  `}
  ${p => p.selected && css`
    background: ${p.theme.positiveColor};
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

export { Day };