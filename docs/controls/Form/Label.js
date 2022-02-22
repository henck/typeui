var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import styled from '../../styles/Theme';
import { css } from 'styled-components';
var Required = styled('span')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* Required fields put an asterisk on the label. */ \n  color: ", ";\n"], ["\n  /* Required fields put an asterisk on the label. */ \n  color: ", ";\n"])), function (p) { return p.theme.errorColor.color; });
var LabelBase = /** @class */ (function (_super) {
    __extends(LabelBase, _super);
    function LabelBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("label", { className: this.props.className },
            p.children,
            p.required && (React.createElement(Required, null, "*"))));
    };
    return LabelBase;
}(React.Component));
var Label = styled(LabelBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  font-weight: 500;\n  font-size: 80%;\n  margin-right: 1em;\n\n  /* Ordinarily, labels are displayed above the field control: */\n  display: block;\n  /* ...but for inline fields, they are placed inline. */\n  ", "\n"], ["\n  position: relative;\n  font-weight: 500;\n  font-size: 80%;\n  margin-right: 1em;\n\n  /* Ordinarily, labels are displayed above the field control: */\n  display: block;\n  /* ...but for inline fields, they are placed inline. */\n  ", "\n"])), function (p) { return p.inline && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: inline;\n  "], ["\n    display: inline;\n  "]))); });
export { Label };
var templateObject_1, templateObject_2, templateObject_3;
