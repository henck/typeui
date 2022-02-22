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
var RowBase = /** @class */ (function (_super) {
    __extends(RowBase, _super);
    function RowBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, onClick: p.onClick }, p.children));
    };
    return RowBase;
}(React.Component));
var Row = styled(RowBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* Entire row is clickable: */\n  cursor: pointer;\n\n  /* Cells are flex-aligned: */\n  display: flex;\n\n  /* Row has a top/bottom border depending on opening direction. */\n  ", "\n  ", "\n\n  /* Background color on hover: */\n  transition: background-color ", "s ease;\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  /* Entire row is clickable: */\n  cursor: pointer;\n\n  /* Cells are flex-aligned: */\n  display: flex;\n\n  /* Row has a top/bottom border depending on opening direction. */\n  ", "\n  ", "\n\n  /* Background color on hover: */\n  transition: background-color ", "s ease;\n  &:hover {\n    background: ", ";\n  }\n"])), function (p) { return p.upwards && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-bottom: solid 1px ", ";\n  "], ["\n    border-bottom: solid 1px ", ";\n  "])), p.theme.normalColor); }, function (p) { return !p.upwards && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-top: solid 1px ", ";\n  "], ["\n    border-top: solid 1px ", ";\n  "])), p.theme.normalColor); }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.normalColor; });
export { Row };
var templateObject_1, templateObject_2, templateObject_3;
