import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Types
import { VerticalAlignment, ListStyleType } from '../Types';

// Other controls
import { ListItem } from './ListItem';
import { ListIcon } from './ListIcon';
import { ListContent } from './ListContent';
import { ListHeader } from './ListHeader';
import { ListDescription } from './ListDescription';

interface IListProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Icon and content alignment: `top`, `center` or `bottom`. By default `top` 
   */
  align?: VerticalAlignment;  
  /** 
   * Shows division lines between list items. 
   * @default false
   */
  divided?: boolean;
  /** 
   * Marks items with a bullet. 
   * @default false
   */
  bulleted?: boolean;
  /** 
   * Marks items with a number. 
   * @default false
   */
  ordered?: boolean;
  /** 
   * Optional bullet style (HTML values, e.g. `square`). This only has effect on `bulleted` lists.
   */
  type?: ListStyleType;
  /** 
   * Make items appear horizontally. 
   * @default false
   */
  horizontal?: boolean;
  /**
   * Display selection rectangle on hover. 
   * @default false
   */
  selection?: boolean;
  /** 
   * Increase negative space around items. Optionally `very`. 
   * @default false
   */
  relaxed?: 'very' | boolean;
  /** 
   * Animate list items on hover. 
   * @default false
   */
  animated?: boolean;
}

const ListBase = (props: IListProps) => {

  // Pass 'align', 'horizontal', 'divided', 'selection', 'relaxed', 'animated' properties 
  // to ListItem children.
  let children = React.Children.map(props.children, (child:any) => {
    if(child == null) return null;
    return React.cloneElement(child, { 
      align: props.align,
      horizontal: props.horizontal,
      divided: props.divided,
      selection: props.selection,
      relaxed: props.relaxed,
      animated: props.animated
    });
  });

  return (
    <ul className={props.className}>
      {children}
    </ul>
  );
}

/* Styling for list container. */
const ListStyled = styled(ListBase)`
  ${p => !p.horizontal && css`
    display: block;
  `}
  ${p => p.horizontal && css`
    display: flex;
  `}

  /* Lists are spaced at top and bottom; this affects sublists. */
  /* margin-top: 4px;
  margin-bottom: 4px; */

  /* Make sure sublevels indent. */
  ul {
    margin-left: 1.5em;
  }

  /* If bulleted, add bullet disc and margin. */
  /* If ordered, add order decimal and margin. */
  ${p => (p.bulleted || p.ordered) && css`
    list-style-position: outside;
    /* Horizontal lists get margin inside the <li> */
    ${!p.horizontal && css`margin-left: 1em;`}
    ${p.horizontal && css`
      li {
        margin-left: 1.5em;
      }
    `}
  `}
  ${p => p.bulleted && css`
    list-style-type: disc;
  `}
  ${p => p.ordered && css`
    list-style-type: decimal;
  `}
  ${p => (p.bulleted || p.ordered) && p.type && css`
    list-style-type: ${p.type};
  `}
`;

/**
 * @link https://henck.github.io/typeui/?path=/story/controls-list--properties
 */
const List = (props: IListProps) => <ListStyled {...props}/>;

List.Item = ListItem;
List.Icon = ListIcon;
List.Content = ListContent;
List.Header = ListHeader;
List.Description = ListDescription;

export { List }
