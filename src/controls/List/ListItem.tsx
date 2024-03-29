import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Types
import { VerticalAlignment } from '../Types';

// Other controls
import { ImageStyled } from '../Image/Image';
import { List } from './List';
import { IconStyled } from '../Icon/Icon';

// Pass 'align', 'horizontal', 'divided', 'selection', 'relaxed', 'animated' properties 

interface IListItemProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * (Not public) Icon and content alignment. Defaults to `top` 
   * @ignore
   */
  align?: VerticalAlignment;
  /** 
   * (Not public) Shows division lines between list items. 
   * @ignore 
   */
  divided?: boolean;
  /** 
   * (Not public) Make items appear horizontally. 
   * @ignore
   */
  horizontal?: boolean;  
  /** 
   * (Not public) Display selection rectangle on hover. 
   * @ignore 
   */
  selection?: boolean;  
  /** 
   * (Not public) Active selection is highlighted. 
   * @ignore
   */
  active?: boolean;
  /** 
   * (Not public) Increase negative space around item. Optionally `very`. 
   * @ignore
   */
  relaxed?: 'very' | boolean;
  /** 
   * (Not public)Animate list items on hover 
   * @ignore
   */
  animated?: boolean;
  /** 
   * onClick events are passed through to the list item's HTML element. 
   */
  onClick?: () => void;
}

const ListItemBase = (props: IListItemProps) =>
  <li className={props.className} onClick={props.onClick}>
    <div>
      {// Get non-list children. These live in a <div> 
        // so we can apply flex to them.
        React.Children.map(props.children, (child:any) => {
          if(child == null) return; 
          if(child.type && child.type === List) return null;
          return child;
      })}
    </div>
    { // Get list children.
      // These live outside the <div> so flex is not applied
      // to them.
      React.Children.map(props.children, (child:any) => {
        if(child == null) return;
        if(child.type && child.type === List) return child;
      })}
  </li>

/* Styling for list item. */
const ListItemStyled = styled(ListItemBase)`
  /* <li> must use display:list-item in order for bullets to show. */
  display: list-item;

  /* Clickable items */
  ${p => p.onClick && css`cursor:pointer;`}

  /* Divided list items have a line between them. */
  ${p => p.divided && !p.horizontal && css`
    padding: 2px 0;
    border-bottom: solid 1px #dedede;
    &:last-child {
      border-bottom: none;
    }
  `}
  ${p => p.divided && p.horizontal && css`
    padding: 0 16px;
    border-right: solid 1px #dedede;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
      border-right: none;
    }
  `}  

  /* A selection list shows a selection box on hover. */
  ${p => p.selection && !p.active && css`
    padding: 4px 4px;
    background-color: #fff;
    ${!p.divided && css`
      border-radius: ${p.theme.radius}px;
    `}
    &:hover {
      background-color: #f7f7f7;
    }
  `}

  ${p => p.active && css`
    padding: 4px 4px;
    ${!p.divided && css`
      border-radius: ${p.theme.radius}px;
    `}    
    color: #fff;
    background-color: ${p.theme.primaryColor};
  `}

  /* An animated list item indents on hover. */
  ${p => p.animated && css`
    padding-right: 20px;
    &:hover {
      padding-left: 20px;
    }
  `}

  /* Transitions for selection and animated */
  transition: padding 0.2s ease, background-color 0.2s ease;

  /* <li> has an inner <div> show we can apply display:flex. The list item's 
   * children live in the <div>. */
  & > div {
    display: flex;
    justify-content: start;

    /* The first child of the ListItem (an icon, an image, etc. usually)
     * must never shrink. */ 
    & > *:first-child {
      flex-shrink: 0;
    }

    /* Relaxed */
    ${p => p.relaxed && p.relaxed !== 'very' && css`padding:6px;`}
    ${p => p.relaxed && p.relaxed === 'very' && css`padding:12px;`}

    /* Icon and content alignment. Defaults to 'top'. */
    ${p => (!p.align || p.align === 'top') && css`
      align-items: flex-start;
      /* Icons and images get a slight top margin, otherwise they're just not quite in line
       * with the content when align="top". */
      ${IconStyled} { margin-top: 4px; }      
      ${ImageStyled} { margin-top: 4px; }      
    `}
    ${p => p.align === 'center' && css`align-items: center;`}
    ${p => p.align === 'bottom' && css`align-items: flex-end;`}
  }
`;

const ListItem  = (props: IListItemProps) => <ListItemStyled {...props}/>

export { ListItem, IListItemProps }
