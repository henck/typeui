import * as React from 'react';
import styled from '../../../styles/Theme';

interface IHarmonyElementProps {
  className?: string;
  color: string;
  onClick?: () => void;
}

class HarmonyElementBase extends React.Component<IHarmonyElementProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className} onClick={p.onClick} style={{background: p.color}}></div>
    );
  }
}

const HarmonyElement = styled(HarmonyElementBase)`
  position: relative;
  width: 65px;
  @media (max-width: ${p => p.theme.smallScreen}px) {
    width: 40px;
  } 
  height: 40px;
  cursor: pointer;

  /* First and last child have rounded borders. */
  &:first-child {
    border-top-left-radius: ${p => p.theme.radius}px;
    border-bottom-left-radius: ${p => p.theme.radius}px;
  }
  &:last-child {
    border-top-right-radius: ${p => p.theme.radius}px;
    border-bottom-right-radius: ${p => p.theme.radius}px;
  }

  /* Lift element up when hovered. */
  z-index: 0;
  transition: transform ${p => p.theme.transition.duration}s ease;
  &:hover {
    z-index: 1;
    transform: scaleX(1.2) scaleY(1.2);
  }
`

export { HarmonyElement };
