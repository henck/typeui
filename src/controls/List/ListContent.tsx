import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Types
import { VerticalAlignment } from '../Types';

interface IListContentProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
  /** 
   * Align content item vertically (defaults to `top`). 
   */
  align?: VerticalAlignment;
  /** 
   * onClick events are passed through to the list item's HTML element. 
   */
  onClick?: () => void;
}

class ListContentBase extends React.Component<IListContentProps> {
  render = () => <div className={this.props.className} onClick={this.props.onClick}>{this.props.children}</div>
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

class ListContent extends React.Component<IListContentProps> {
  render = () => <ListContentStyled {...this.props}/>
}

export { ListContent };