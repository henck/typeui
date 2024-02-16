import * as React from 'react';
import styled from '../../styles/Theme';

// Helpers
import { lighten } from '../../helper/lighten';

interface IProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** Fired when selection is clicked. */
  onClick: () => void;
}

const SelectionBase = (props: IProps) => {
  // Handle clicks locally so that they don't propagate
  // to the Selector, then send them on to the subscriber.
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onClick();
  }

  // Item function is only called when item is not null.
  return (
    <div className={props.className} onClick={handleClick}>
      {props.children}
      <svg><use xlinkHref={"/spritemap.svg#times"}></use></svg>
    </div>
  )
}

const Selection = styled(SelectionBase)`
  position: relative;
  display: inline-block;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${p => p.theme.radius}px;
  background: ${p => p.theme.primaryColor};
  color: #fff;
  padding: 2px 20px 2px 8px;
  margin-right: 4px;
  white-space: nowrap;
  user-select: none;

  &>svg {
    position: absolute;
    right: 5px;
    top: 4px;
    width: 14px;
    height: 14px;    
    fill: #eee;
    transition: fill ${p => p.theme.transition.duration}s ease;
  }

  transition: background-color ${p => p.theme.transition.duration}s ease;
  &:hover {
    background: ${p => lighten(0.1, p.theme.primaryColor)};
    &>svg {
      fill: #fff;
    }
  }

  &.item-enter {
    opacity: 0;
  }
  &.item-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  &.item-exit {
    opacity: 1;
  }
  &.item-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }  
`;

export { Selection }
