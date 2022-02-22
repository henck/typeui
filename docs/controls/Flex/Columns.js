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
import * as React from 'react';
// Other controls
import { Flex } from './Flex';
/*
 * Flex.Columns takes an array of children and builds them into stackable
 * rows that contain exactly count items per row.
 *
 * The final row is filled up with null-elements.
 */
var Columns = /** @class */ (function (_super) {
    __extends(Columns, _super);
    function Columns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Columns.prototype.render = function () {
        var p = this.props;
        var children = React.Children.toArray(p.children);
        return (React.createElement(Flex, { stackable: true, compact: true }, children.map(function (item, index) { return index % p.count === 0 ? children.slice(index, index + p.count) : null; })
            .filter(function (item) { return item; })
            .map(function (item, idx) {
            while (item.length < p.count)
                item.push(null);
            return (React.createElement(Flex.Row, { key: idx }, item.map(function (item, idx) { return React.createElement(Flex.Column, { width: 1, key: idx }, item); })));
        })));
    };
    return Columns;
}(React.Component));
export { Columns };
