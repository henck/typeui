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
import { css } from 'styled-components';
//
// Container for Tabs Panes.
//
var PanesBase = /** @class */ (function (_super) {
    __extends(PanesBase, _super);
    function PanesBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanesBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.children));
    };
    return PanesBase;
}(React.Component));
var Panes = styled(PanesBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  flex: 1;\n  \n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n\n  /* Non-underlined panes have a border around them. */\n  ", "\n"], ["\n  height: 100%;\n  flex: 1;\n  \n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n\n  /* Non-underlined panes have a border around them. */\n  ", "\n"])), function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return !p.underlined && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 14px;\n    border: solid 1px rgba(35, 35, 35, 0.15);\n    border-top: none;      \n  "], ["\n    padding: 14px;\n    border: solid 1px rgba(35, 35, 35, 0.15);\n    border-top: none;      \n  "]))); });
Panes.displayName = "Tabs.Panes";
export { Panes };
var templateObject_1, templateObject_2;
