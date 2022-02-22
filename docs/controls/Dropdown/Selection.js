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
import * as React from 'react';
import styled from '../../styles/Theme';
// Helpers
import { lighten } from '../../helper/lighten';
var SelectionBase = /** @class */ (function (_super) {
    __extends(SelectionBase, _super);
    function SelectionBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Handle clicks locally so that they don't propagate
        // to the Selector, then send them on to the subscriber.
        _this.handleClick = function (e) {
            e.stopPropagation();
            _this.props.onClick();
        };
        return _this;
    }
    SelectionBase.prototype.render = function () {
        var p = this.props;
        // Item function is only called when item is not null.
        return (React.createElement("div", { className: p.className, onClick: this.handleClick },
            p.children,
            React.createElement("svg", null,
                React.createElement("use", { xlinkHref: "spritemap.svg#times" }))));
    };
    return SelectionBase;
}(React.Component));
var Selection = styled(SelectionBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  align-items: center;\n  box-sizing: border-box;\n  border-radius: ", "px;\n  background: ", ";\n  color: #fff;\n  padding: 2px 20px 2px 8px;\n  margin-right: 4px;\n  white-space: nowrap;\n\n  &>svg {\n    position: absolute;\n    right: 5px;\n    top: 4px;\n    width: 14px;\n    height: 14px;    \n    fill: #eee;\n    transition: fill ", "s ease;\n  }\n\n  transition: background-color ", "s ease;\n  &:hover {\n    background: ", ";\n    &>svg {\n      fill: #fff;\n    }\n  }\n\n  &.item-enter {\n    opacity: 0;\n  }\n  &.item-enter-active {\n    opacity: 1;\n    transition: opacity 300ms ease-in;\n  }\n  &.item-exit {\n    opacity: 1;\n  }\n  &.item-exit-active {\n    opacity: 0;\n    transition: opacity 300ms ease-in;\n  }  \n"], ["\n  position: relative;\n  display: inline-block;\n  align-items: center;\n  box-sizing: border-box;\n  border-radius: ", "px;\n  background: ", ";\n  color: #fff;\n  padding: 2px 20px 2px 8px;\n  margin-right: 4px;\n  white-space: nowrap;\n\n  &>svg {\n    position: absolute;\n    right: 5px;\n    top: 4px;\n    width: 14px;\n    height: 14px;    \n    fill: #eee;\n    transition: fill ", "s ease;\n  }\n\n  transition: background-color ", "s ease;\n  &:hover {\n    background: ", ";\n    &>svg {\n      fill: #fff;\n    }\n  }\n\n  &.item-enter {\n    opacity: 0;\n  }\n  &.item-enter-active {\n    opacity: 1;\n    transition: opacity 300ms ease-in;\n  }\n  &.item-exit {\n    opacity: 1;\n  }\n  &.item-exit-active {\n    opacity: 0;\n    transition: opacity 300ms ease-in;\n  }  \n"])), function (p) { return p.theme.radius; }, function (p) { return p.theme.primaryColor; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return lighten(0.1, p.theme.primaryColor); });
export { Selection };
var templateObject_1;
