import * as React from 'react';
import styled from '../../../styles/Theme';

interface IProps {
  /** @ignore */
  className?: string;
  color: string;
  locked: boolean;
  onClick: () => void;
  onToggle: () => void;
}

const SwatchBase = (props: IProps) =>
  <div className={props.className}>
    <div onClick={props.onClick}></div>
    <svg onClick={props.onToggle}>
      <use xlinkHref={`/spritemap.svg#${props.locked ? 'lock' : 'unlock'}`}></use>
    </svg>
  </div>

const Swatch = styled(SwatchBase)`
  position: relative;
  display: flex;
  width: 50px;
  align-items: center;
  margin-bottom: 4px;

  & > div {
    width: 30px;
    height: 24px;
    background-color: ${p => p.color};
    border-radius: ${p => p.theme.radius}px;
    margin-right: 4px;
    cursor: pointer;
    transition: transform ${p => p.theme.transition.duration}s ease;
    &:hover {
      transform: scaleX(1.2) scaleY(1.2);
    }
  }

  svg {
    fill: ${p => p.locked ? p.theme.fontColor : p.theme.normalColor};
    width:  13px;
    height: 13px;
    cursor: pointer;
    transition: transform ${p => p.theme.transition.duration}s ease;
    &:hover {
      transform: scaleX(1.2) scaleY(1.2);
    }
  }
`

export { Swatch }
