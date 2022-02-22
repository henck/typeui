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
var TabBase = /** @class */ (function (_super) {
    __extends(TabBase, _super);
    function TabBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, ref: p.setRef, onClick: p.onClick }, p.children));
    };
    return TabBase;
}(React.Component));
var Tab = styled(TabBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: table-cell;\n  vertical-align: middle;\n  white-space: nowrap;\n  padding: 0 20px;\n  font-size: 0.875em;\n  box-sizing: border-box;\n  height: 40px;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity 0.3s;\n\n  /* User cannot select header text.\n   * This prevents accidental selection when clicking the tab.\n   */\n  user-select: none;  \n\n  ", "\n"], ["\n  display: table-cell;\n  vertical-align: middle;\n  white-space: nowrap;\n  padding: 0 20px;\n  font-size: 0.875em;\n  box-sizing: border-box;\n  height: 40px;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity 0.3s;\n\n  /* User cannot select header text.\n   * This prevents accidental selection when clicking the tab.\n   */\n  user-select: none;  \n\n  ", "\n"])), function (p) { return p.active && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    opacity: 1.0;\n    font-weight: 500;\n    ", "\n  "], ["\n    opacity: 1.0;\n    font-weight: 500;\n    ", "\n  "])), !p.underlined && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding: 0 19px;\n      border: solid 1px rgba(35, 35, 35, 0.15);\n      border-bottom: solid 1px #ffffff;\n      border-top-left-radius: ", "px;\n      border-top-right-radius: ", "px;\n    "], ["\n      padding: 0 19px;\n      border: solid 1px rgba(35, 35, 35, 0.15);\n      border-bottom: solid 1px #ffffff;\n      border-top-left-radius: ", "px;\n      border-top-right-radius: ", "px;\n    "])), p.theme.radius, p.theme.radius)); });
Tab.displayName = "Tabs.Tab";
export { Tab };
var templateObject_1, templateObject_2, templateObject_3;
