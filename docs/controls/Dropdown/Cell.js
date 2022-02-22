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
var CellBase = /** @class */ (function (_super) {
    __extends(CellBase, _super);
    function CellBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellBase.prototype.render = function () {
        var p = this.props;
        // Item function is only called when item is not null.
        return (React.createElement("div", { className: p.className }, p.item !== null && p.children(p.item)));
    };
    return CellBase;
}(React.Component));
var Cell = styled(CellBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  padding: 16px 12px;\n  height: 56px;\n\n  /* All cells are equal width. Todo? */\n  flex: ", ";\n\n  /* Text alignment */\n  ", "\n\n  /* Text is truncated with an ellipsis. */\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n\n  /* Space between cells. */\n  &:not(:last-child) {\n    margin-right: 16px;\n  }\n"], ["\n  box-sizing: border-box;\n  padding: 16px 12px;\n  height: 56px;\n\n  /* All cells are equal width. Todo? */\n  flex: ", ";\n\n  /* Text alignment */\n  ", "\n\n  /* Text is truncated with an ellipsis. */\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n\n  /* Space between cells. */\n  &:not(:last-child) {\n    margin-right: 16px;\n  }\n"])), function (p) { return p.weight ? p.weight : 1; }, function (p) { return p.align === 'right' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["text-align: right;"], ["text-align: right;"]))); });
export { Cell };
var templateObject_1, templateObject_2;
