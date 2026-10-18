import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
// Other controls
import { Column } from './Column';
import { DropdownInner } from './DropdownInner';
/*
 * DropdownBase puts a <div> around DropdownInner so that we
 * can add attachable components.
 */
const DropdownBase = (props) => {
    const isAttachedTo = (c, side) => {
        const attached = c.props.attached;
        return attached === side || (!attached && side === 'left');
    };
    // Return an array of children that are Labels and attached to this
    // Input control.
    const getAttachables = (side) => {
        return React.Children.toArray(props.children)
            .filter(c => React.isValidElement(c) // Is this a React node?
            && c.props.isLabel // Is this a Label?
            && isAttachedTo(c, side) // Is it attached to this side?
        )
            .map((c, idx) => {
            let attached = c.props.attached;
            if (!attached)
                attached = 'left'; // Attach to left side by default.
            return React.cloneElement(c, { key: idx, attached: attached });
        });
    };
    const getItems = () => {
        return React.Children.map(props.children, (child) => {
            // Only Columns are passed to DropdownInner.
            if (child.type && child.type === Column)
                return child;
        });
    };
    const { className, ...restprops } = props;
    return (_jsxs("div", { className: className, children: [getAttachables('left'), _jsx(DropdownInner, { ...restprops, children: getItems() }), getAttachables('right')] }));
};
const DropdownStyled = styled(DropdownBase) `
  position:    relative;
  display:     inline-flex;
  align-items: stretch;
  color:       ${p => p.theme.fontColor};
  /* Dropdown has a minimum width. */
  width: 250px;
  /* A fluid Dropdown occupies full horizontal width. */
  ${p => p.fluid && css `width: 100%;`}  
`;
/**
 * A `Dropdown` is a replacement for `<select>` (select). It opens upwards or
 * downwards depending on its position in the viewport. Its selection and
 * dropdown items are formatted using a formatting function. A Dropdown can
 * also take an `onSearch` callback, which tells provides its subscriber with
 * a search query in order to provide the `Dropdown` with new items.
 *
 * @example
 * <Dropdown
 *   data={[{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}]}
 *   label={(item: any) => item.name}
 *   placeholder="Select one"
 * >
 *   <Dropdown.Column>{(item: any) => item.name}</Dropdown.Column>
 * </Dropdown>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-dropdown--properties
 */
const Dropdown = (props) => _jsx(DropdownStyled, { ...props });
/**
 * A Dropdown.Column's child is an item formatter function. A column can
 * optionally take a weight and an alignment.
 */
Dropdown.Column = Column;
export { Dropdown };
