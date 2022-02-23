var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import styled from '../../styles/Theme';
// Other controls
import { Row } from './Row';
import { Column } from './Column';
import { Divider } from './Divider';
import { Quick } from './Quick';
import { Columns } from './Columns';
var FlexBase = /** @class */ (function (_super) {
    __extends(FlexBase, _super);
    function FlexBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlexBase.prototype.render = function () {
        var p = this.props;
        // Determine gutter width:
        var gutter = 1;
        if (p.relaxed)
            gutter = gutter * 2;
        if (p.relaxed === 'very')
            gutter = gutter * 2;
        // Copy 'stackable', 'divided' and 'gutter' props into children.
        return (React.createElement("div", { className: p.className }, React.Children.map(p.children, function (child) {
            return child == null ? null : React.cloneElement(child, { stackable: p.stackable, divided: p.divided, compact: p.compact, gutter: gutter });
        })));
    };
    return FlexBase;
}(React.Component));
var StyledFlex = styled(FlexBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  /* Flex is column-first, then row. */\n  flex-direction: column;\n"], ["\n  position: relative;\n  display: flex;\n  /* Flex is column-first, then row. */\n  flex-direction: column;\n"])));
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
var Flex = /** @class */ (function (_super) {
    __extends(Flex, _super);
    function Flex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(StyledFlex, __assign({}, _this.props)); };
        return _this;
    }
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
    return Flex;
}(React.Component));
export { Flex };
var templateObject_1;
