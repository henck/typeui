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
import { Number } from '../../formatters/Number';
/**
 * Counter works with DataTable to show a label containing
 * the total number of records, and the indices of the first to
 * last record currently being scrolled to.
 */
var CounterBase = /** @class */ (function (_super) {
    __extends(CounterBase, _super);
    function CounterBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CounterBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement("span", null, p.first),
            "-",
            React.createElement("span", null,
                React.createElement(Number, { value: Math.min(p.last, p.count), decimals: 0 })),
            " of ",
            React.createElement("span", null,
                React.createElement(Number, { value: p.count, decimals: 0 })),
            " ",
            p.count == 1 && 'record',
            p.count != 1 && 'records'));
    };
    return CounterBase;
}(React.Component));
var Counter = styled(CounterBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  right: 30px;\n  bottom: 15px;\n  cursor: default;\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  background: ", ";\n  padding: 3px 8px 3px 8px;\n  font-size: 12px;\n  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  & > span {\n    font-weight: 500;\n  }\n  opacity: 1;\n  transform: scale(1);\n\n  /* CSSTransition classes */\n  &.fade-enter {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: opacity 0.5s ease, transform 0.5s ease;\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transform: scale(0.5);\n    transition: opacity 0.5s ease, transform 0.5s ease;\n  }    \n"], ["\n  position: absolute;\n  right: 30px;\n  bottom: 15px;\n  cursor: default;\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  background: ", ";\n  padding: 3px 8px 3px 8px;\n  font-size: 12px;\n  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  & > span {\n    font-weight: 500;\n  }\n  opacity: 1;\n  transform: scale(1);\n\n  /* CSSTransition classes */\n  &.fade-enter {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: opacity 0.5s ease, transform 0.5s ease;\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transform: scale(0.5);\n    transition: opacity 0.5s ease, transform 0.5s ease;\n  }    \n"])), function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.background; });
export { Counter };
var templateObject_1;
