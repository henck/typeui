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
import { css } from 'styled-components';
import styled from '../../styles/Theme';
// Helpers
import { lighten } from '../../helper/lighten';
var AccordionHeaderBase = /** @class */ (function (_super) {
    __extends(AccordionHeaderBase, _super);
    function AccordionHeaderBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionHeaderBase.prototype.render = function () {
        var p = this.props;
        var svg = React.createElement("svg", null,
            React.createElement("use", { xlinkHref: "spritemap.svg#caret-down" }));
        return (React.createElement("div", { className: p.className, onClick: this.props.onClick },
            (!p.align || p.align === 'left') && svg,
            React.createElement("span", null, p.children),
            p.align === 'right' && svg));
    };
    return AccordionHeaderBase;
}(React.Component));
var AccordionHeader = styled(AccordionHeaderBase)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  align-items: center;\n  cursor: pointer;\n  transition: color ", "s ease; \n  padding: 8px 0 8px 0;\n\n  /* User cannot select header text.\n   * This prevents accidental selection when clicking the header.\n   */\n  user-select: none;\n\n  /*\n   * A styled accordion header has padding and \n   * has a lighter text color when active. \n   */\n  ", "\n\n  /* Icon rotates when active, and changes fill color. */\n  & > svg {\n    width: 17px;\n    height: 17px; \n    transform: ", ";\n    transition: fill ", "s ease, \n                transform ", "s ease;\n    fill: ", ";\n  }\n  ", "\n\n  &:hover {\n    color: ", ";\n    & > svg {\n      fill: ", ";\n    }\n  }\n\n  /* Separate title slightly from icon. */\n  & > span {\n    padding-left: 2px;\n  }\n"], ["\n  display: flex;\n  ", "\n  align-items: center;\n  cursor: pointer;\n  transition: color ", "s ease; \n  padding: 8px 0 8px 0;\n\n  /* User cannot select header text.\n   * This prevents accidental selection when clicking the header.\n   */\n  user-select: none;\n\n  /*\n   * A styled accordion header has padding and \n   * has a lighter text color when active. \n   */\n  ", "\n\n  /* Icon rotates when active, and changes fill color. */\n  & > svg {\n    width: 17px;\n    height: 17px; \n    transform: ", ";\n    transition: fill ", "s ease, \n                transform ", "s ease;\n    fill: ", ";\n  }\n  ", "\n\n  &:hover {\n    color: ", ";\n    & > svg {\n      fill: ", ";\n    }\n  }\n\n  /* Separate title slightly from icon. */\n  & > span {\n    padding-left: 2px;\n  }\n"])), function (p) { return p.align === 'right' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["justify-content: space-between;"], ["justify-content: space-between;"]))); }, function (p) { return p.theme.transition.duration; }, function (p) { return p.styled && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    padding: 8px 10px 8px 10px;\n    ", "\n  "], ["\n    padding: 8px 10px 8px 10px;\n    ", "\n  "])), !p.active && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), lighten(0.5, p.theme.fontColor))); }, function (p) { return p.align && p.align === 'right' ? 'rotate(90deg)' : 'rotate(-90deg)'; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return lighten(0.5, p.theme.fontColor); }, function (p) { return p.active && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    & > svg {\n      transform: rotate(0deg);\n      fill: ", ";\n    }\n  "], ["\n    & > svg {\n      transform: rotate(0deg);\n      fill: ", ";\n    }\n  "])), function (p) { return p.theme.fontColor; }); }, function (p) { return p.theme.fontColor; }, function (p) { return p.theme.fontColor; });
export { AccordionHeader };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
