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
import styled from '../../../styles/Theme';
import { css } from 'styled-components';
var DayBase = /** @class */ (function (_super) {
    __extends(DayBase, _super);
    function DayBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, onClick: p.onClick }, p.day));
    };
    return DayBase;
}(React.Component));
var Day = styled(DayBase)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: 40px;\n  text-align: center;\n  line-height: 30px; /* For vertical centering */\n  cursor: pointer;\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n\n  /* Grey dates do not belong to the current month. */\n  ", "\n\n  /* Highlight today's date and selected date. */\n  ", "\n  ", "\n  ", "  \n\n  /* Lift element up when hovered. */\n  transition: transform ", "s ease,\n              box-shadow ", "s ease,\n              border-color ", "s ease;\n  z-index: 0;  \n  &:hover {\n    z-index: 1;\n    transform: scaleX(1.4) scaleY(1.4);\n    ", "\n    box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  }\n"], ["\n  box-sizing: border-box;\n  width: 40px;\n  text-align: center;\n  line-height: 30px; /* For vertical centering */\n  cursor: pointer;\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n\n  /* Grey dates do not belong to the current month. */\n  ", "\n\n  /* Highlight today's date and selected date. */\n  ", "\n  ", "\n  ", "  \n\n  /* Lift element up when hovered. */\n  transition: transform ", "s ease,\n              box-shadow ", "s ease,\n              border-color ", "s ease;\n  z-index: 0;  \n  &:hover {\n    z-index: 1;\n    transform: scaleX(1.4) scaleY(1.4);\n    ", "\n    box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  }\n"])), function (p) { return p.theme.background; }, function (p) { return p.theme.background; }, function (p) { return p.theme.radius; }, function (p) { return p.grey && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["color: #aaa;"], ["color: #aaa;"]))); }, function (p) { return (p.today || p.selected) && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-weight: 500;\n  "], ["\n    font-weight: 500;\n  "]))); }, function (p) { return p.today && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background: ", ";\n  "], ["\n    background: ", ";\n  "])), p.theme.normalColor); }, function (p) { return p.selected && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: #fff;\n    background: ", ";\n  "], ["\n    color: #fff;\n    background: ", ";\n  "])), p.theme.primaryColor); }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return !p.today && !p.selected && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["border-color: #eee;"], ["border-color: #eee;"]))); });
export { Day };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
