import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
// Other controls
import { Row } from './Row';
import { Column } from './Column';
import { Divider } from './Divider';
import { Quick } from './Quick';
import { Columns } from './Columns';
const FlexBase = (props) => {
    // Determine gutter width:
    let gutter = 1;
    if (props.relaxed)
        gutter = gutter * 2;
    if (props.relaxed === 'very')
        gutter = gutter * 2;
    // Copy 'stackable', 'divided' and 'gutter' props into children.
    return (_jsx("div", { className: props.className, children: React.Children.map(props.children, (child) => child == null ? null : React.cloneElement(child, { stackable: props.stackable, divided: props.divided, compact: props.compact, gutter: gutter })) }));
};
const StyledFlex = styled(FlexBase) `
  position: relative;
  display: flex;
  /* Flex is column-first, then row. */
  flex-direction: column;
`;
/**
 * A Flex is used to create rows and columns that space equally.
 *
 * @example
 * <Flex>
 *   <Flex.Row>
 *     <Flex.Column>
 *       <Box color="goldenrod">One</Box>
 *     </Flex.Column>
 *     <Flex.Column>
 *       <Box>Two</Box>
 *     </Flex.Column>
 *   </Flex.Row>
 *   <Flex.Row>
 *     <Flex.Column>
 *       <Box color="skyblue">Three</Box>
 *     </Flex.Column>
 *     <Flex.Column>
 *       <Box color="LightSalmon">Four</Box>
 *     </Flex.Column>
 *   </Flex.Row>
 * </Flex>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-flex--properties
 */
const Flex = (props) => _jsx(StyledFlex, { ...props });
/**
 * There can be multiple Flex.Row elements, but there is no vertical connection
 * between cells (this is not a grid).
 */
Flex.Row = Row;
/**
 * The width attribute of Flex.Column can be used to give weight to a column.
 */
Flex.Column = Column;
/**
 * A Flex.Divider can be added between two columns. This only works for exactly
 * two columns. The divider automatically becomes horizontal when the screen is
 * narrow enough and the Flex is stackable. An optional text can be placed in the
 * divider element.
 */
Flex.Divider = Divider;
/**
 * A Flex.Quick is used to vertically-align content in a row, and putting small
 * spacing between items. Optionally, an align prop of center, top or bottom can
 * be provided. The default is center.
 */
Flex.Quick = Quick;
/**
 * Flex.Columns takes an array of children and builds them into stackable
 * rows that contain exactly count items per row. The final row is filled up
 * with null-elements.
 */
Flex.Columns = Columns;
export { Flex };
