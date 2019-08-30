import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { Float } from '../Types';
import { Ripple } from '../Ripple/Ripple';

interface IHeaderProps {
  className?: string;
  children?: React.ReactNode;
  /** Is column orderable? */
  orderable: boolean;
  /** Is column ordered? */
  ordered: boolean;
  /** Sort direction */
  dir?: 'asc' | 'desc';  
  /** Default sort direction */
  defaultDir?: 'asc' | 'desc';  
  /** OnClick for sorting. */
  onClick?: () => void;
  /** Column weight. Defaults to 1. */
  weight?: number;
  /** Text alignment. Defaults to 'left'. */
  align?: Float;  
}

class HeaderBase extends React.Component<IHeaderProps, {}> {
  public render() {
    let p = this.props;
    let svg = <svg><use xlinkHref={"spritemap.svg#caret-down"}></use></svg>;
    return (
      <Ripple type={'div'} className={p.className} onClick={p.onClick}>
        {p.align !== 'right' && svg}
        <span>
          {p.children}
        </span>
        {p.align === 'right' && svg}
      </Ripple>
    )
  }
}

const Header = styled(HeaderBase)`
  display: flex;
  align-items: center;
  background-color: #fff;

  /* On small screens, only the first Heading is shown. */
  &:not(:first-child) {
    @media (max-width: ${p => p.theme.smallScreen}px) {
      display: none;
    }
  }    

  /* All cells are equal width. Todo? */
  flex: ${p => p.weight ? p.weight : 1};
  overflow-x: hidden;

  padding: 16px 12px;
  margin-right: 30px;
  &:not(:last-child) {
    margin-right: 26px;
  }
  ${p => p.orderable && css`cursor:pointer;`}

  /* Header content */
  span {
    /* Text alignment */
    flex: 1;
    text-align: left;
    ${p => p.align === 'right' && css`text-align: right;`}

    font-size: 12px;
    font-weight: 500;

    /* Text is truncated with an ellipsis. */
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;  
  }  
  
  /* Ordering icon */

  & > svg {
    width: 0;
    height: 0;   
    transition: transform ${p => p.theme.transition.duration*2}s ease, 
                width ${p => p.theme.transition.duration*2}s ease, 
                height ${p => p.theme.transition.duration*2}s ease;
    fill: #333;
    transform: rotate(180deg);
  }
  
  &:hover {
    ${p => p.orderable && css`
      & > svg {
        width: 17px;
        height: 17px;
      }
    `}
  }

  ${p => p.ordered && css`
    & > svg {
      width: 17px;
      height: 17px;
    }
  `}

  ${p => ((p.ordered && p.dir === 'desc') || (!p.ordered && p.defaultDir === 'desc')) && css`
    & > svg {
      transform: rotate(0deg);
    }
  `}
`;

export { Header };