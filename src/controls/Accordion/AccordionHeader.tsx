import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { lighten } from '../../helper/lighten';
import { Float } from '../Types';

interface IAccordionHeaderProps {
  className?: string;
  children?: React.ReactNode;
  /** Callback when header clicked. */
  onClick?: () => void;
  /** Is this header currently active? */
  active?: boolean;
  /** A styled accordion adds basic formatting. */
  styled?: boolean;  
  /** Align caret icon to left or right. */
  align?: Float;    
}

class AccordionHeaderBase extends React.Component<IAccordionHeaderProps, {}> {
  render() {
    let p = this.props;
    let svg = <svg><use xlinkHref={"spritemap.svg#caret-down"}></use></svg>
    return (
      <div className={p.className} onClick={this.props.onClick}>
        {(!p.align || p.align === 'left') && svg}
        <span>{p.children}</span>
        {p.align === 'right' && svg}
      </div>
    );
  }
}

const AccordionHeader = styled(AccordionHeaderBase)`
  display: flex;
  ${p => p.align === 'right' && css`justify-content: space-between;`}
  align-items: center;
  cursor: pointer;
  transition: color ${p => p.theme.transition.duration}s ease; 
  padding: 8px 0 8px 0;

  /* User cannot select header text.
   * This prevents accidental selection when clicking the header.
   */
  user-select: none;

  /*
   * A styled accordion header has padding and 
   * has a lighter text color when active. 
   */
  ${p => p.styled && css`
    padding: 8px 10px 8px 10px;
    ${!p.active && css`
      color: ${lighten(0.5, p.theme.fontColor)};
    `}
  `}

  /* Icon rotates when active, and changes fill color. */
  & > svg {
    width: 17px;
    height: 17px; 
    transform: ${p => p.align && p.align === 'right' ? 'rotate(90deg)' : 'rotate(-90deg)'};
    transition: fill ${p => p.theme.transition.duration}s ease, 
                transform ${p => p.theme.transition.duration}s ease;
    fill: ${p => lighten(0.5, p.theme.fontColor)};
  }
  ${p => p.active && css`
    & > svg {
      transform: rotate(0deg);
      fill: ${p => p.theme.fontColor};
    }
  `}

  &:hover {
    color: ${p => p.theme.fontColor};
    & > svg {
      fill: ${p => p.theme.fontColor};
    }
  }

  /* Separate title slightly from icon. */
  & > span {
    padding-left: 2px;
  }
`;

AccordionHeader.displayName = "Accordion.Header";

export { AccordionHeader };