import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
// Other controls
import { Flex } from './Flex';
/*
 * Flex.Columns takes an array of children and builds them into stackable
 * rows that contain exactly count items per row.
 *
 * The final row is filled up with null-elements.
 */
const Columns = (props) => {
    let children = React.Children.toArray(props.children);
    return (_jsx(Flex, { stackable: true, compact: true, children: children.map((item, index) => index % props.count === 0 ? children.slice(index, index + props.count) : null)
            .filter((item) => item)
            .map((item, idx) => {
            while (item.length < props.count)
                item.push(null);
            return (_jsx(Flex.Row, { children: item.map((item, idx) => _jsx(Flex.Column, { width: 1, children: item }, idx)) }, idx));
        }) }));
};
export { Columns };
