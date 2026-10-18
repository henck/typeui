import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
// Other controls
import { ListItem } from './ListItem';
import { ListIcon } from './ListIcon';
import { ListContent } from './ListContent';
import { ListHeader } from './ListHeader';
import { ListDescription } from './ListDescription';
const ListBase = (props) => {
    // Pass 'align', 'horizontal', 'divided', 'selection', 'relaxed', 'animated' properties 
    // to ListItem children.
    let children = React.Children.map(props.children, (child) => {
        if (child == null)
            return null;
        return React.cloneElement(child, {
            align: props.align,
            horizontal: props.horizontal,
            divided: props.divided,
            selection: props.selection,
            relaxed: props.relaxed,
            animated: props.animated
        });
    });
    return (_jsx("ul", { className: props.className, children: children }));
};
/* Styling for list container. */
const ListStyled = styled(ListBase) `
  ${p => !p.horizontal && css `
    display: block;
  `}
  ${p => p.horizontal && css `
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
  ${p => (p.bulleted || p.ordered) && css `
    list-style-position: outside;
    /* Horizontal lists get margin inside the <li> */
    ${!p.horizontal && css `margin-left: 1em;`}
    ${p.horizontal && css `
      li {
        margin-left: 1.5em;
      }
    `}
  `}
  ${p => p.bulleted && css `
    list-style-type: disc;
  `}
  ${p => p.ordered && css `
    list-style-type: decimal;
  `}
  ${p => (p.bulleted || p.ordered) && p.type && css `
    list-style-type: ${p.type};
  `}
`;
/**
 * @link https://henck.github.io/typeui/?path=/story/controls-list--properties
 */
const List = (props) => _jsx(ListStyled, { ...props });
List.Item = ListItem;
List.Icon = ListIcon;
List.Content = ListContent;
List.Header = ListHeader;
List.Description = ListDescription;
export { List };
