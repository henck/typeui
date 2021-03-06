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
  className?: string;
  children?: React.ReactNode;
  /** Icon and content alignment: `top`, `center` or `bottom`. By default `top` */
  align?: VerticalAlignment;  
  /** Shows division lines between list items. */
  divided?: boolean;
  /** Marks items with a bullet. */
  bulleted?: boolean;
  /** Marks items with a number. */
  ordered?: boolean;
  /** Optional bullet style (HTML values, e.g. `square`). This only has effect on `bulleted` lists.*/
  type?: ListStyleType;
  /** Make items appear horizontally. */
  horizontal?: boolean;
  /** Display selection rectangle on hover. */
  selection?: boolean;
  /** Increase negative space around items. Optionally `very`. */
  relaxed?: 'very' | boolean;
  /** Animate list items on hover. */
  animated?: boolean;
}

class ListBase extends React.Component<IListProps, {}> {
  render() {
    let p = this.props;

    // Pass 'align', 'horizontal', 'divided', 'selection', 'relaxed', 'animated' properties 
    // to ListItem children.
    let children = React.Children.map(this.props.children, (child:any) => {
      if(child == null) return null;
      return React.cloneElement(child, { 
        align: p.align,
        horizontal: p.horizontal,
        divided: p.divided,
        selection: p.selection,
        relaxed: p.relaxed,
        animated: p.animated
      });
    });

    return (
      <ul className={p.className}>
        {children}
      </ul>
    );
  }  
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

//
// Wrapper around ListStyled to turn it into a component again.
// This way, we can add static class members.
// 
class List extends React.Component<IListProps, {}> {
  public static Item = ListItem;
  public static Icon = ListIcon;
  public static Content = ListContent;
  public static Header = ListHeader;
  public static Description = ListDescription;

  render() {
    let p = this.props;
    return (
      <ListStyled {...p}></ListStyled>
    )
  }
}

(List.Content as any).displayName = "List.Content";
(List.Description as any).displayName = "List.Description";
(List.Header as any).displayName = "List.Header";
(List.Icon as any).displayName = "List.Icon";
(List.Item as any).displayName = "List.Item";

export { List };