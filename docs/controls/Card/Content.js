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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
var ContentBase = /** @class */ (function (_super) {
    __extends(ContentBase, _super);
    function ContentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("div", { className: _this.props.className }, _this.props.children); };
        return _this;
    }
    return ContentBase;
}(React.Component));
var ContentStyled = styled(ContentBase)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  padding: 14px;\n\n  ", "\n  ", "    \n  ", "      \n\n  ", "\n\n  /* Multiple Card.Content elements are separated by a border. */\n  &:not(:first-of-type) {\n    border-top: solid 1px ", ";\n  }\n"], ["\n  position: relative;\n  padding: 14px;\n\n  ", "\n  ", "    \n  ", "      \n\n  ", "\n\n  /* Multiple Card.Content elements are separated by a border. */\n  &:not(:first-of-type) {\n    border-top: solid 1px ", ";\n  }\n"])), function (p) { return (!p.align || p.align == 'left') && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["text-align: left;"], ["text-align: left;"]))); }, function (p) { return p.align == 'center' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["text-align: center;"], ["text-align: center;"]))); }, function (p) { return p.align == 'right' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["text-align: right;"], ["text-align: right;"]))); }, function (p) { return p.secondary && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["background: ", ";"], ["background: ", ";"])), p.theme.normalColor); }, function (p) { return p.theme.normalColor; });
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(ContentStyled, __assign({}, _this.props)); };
        return _this;
    }
    return Content;
}(React.Component));
export { Content };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
