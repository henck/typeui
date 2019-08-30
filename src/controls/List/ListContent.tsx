import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { VerticalAlignment } from '../Types';

interface IListContentProps {
  className?: string;
  children?: React.ReactNode;
  /** onClick events are passed through to the list item's HTML element */
  onClick?: () => void;
  /** Align content item vertically (default: 'top'). */
  align?: VerticalAlignment;
}

class ListContentBase extends React.Component<IListContentProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className} onClick={p.onClick}>
        {p.children}
      </div>
    )
  }  
}

/* Styling for list item. */
const ListContentStyled = styled(ListContentBase)`
  /* The first List.Content will always occupy as much space as it can.
   * Possible subsequent List.Content elements will shrink. 
   */
  flex-grow: 0;
  &:first-of-type {
    flex-grow: 1;
  }

  /* Vertical alignment */
  ${p => p.align == 'center' && css`align-self: center;`}
  ${p => p.align == 'bottom' && css`align-self: flex-end;`}

  /* Clickable items get hand cursor. */
  ${p => p.onClick && css`cursor:pointer;`}

  /* If there is another element before the content, then add some margin. */
  &:not(:first-child) {
    margin-left: 8px;
  }  
`;

class ListContent extends React.Component<IListContentProps, {}> {
  public static displayName = "List.Content";
  
  render() {
    let p = this.props;
    return (
      <ListContentStyled {...p}/>
    )
  }  
}

export { ListContent }