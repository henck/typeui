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
import styled from '../../styles/Theme';
var PlaceholderParagraphBase = /** @class */ (function (_super) {
    __extends(PlaceholderParagraphBase, _super);
    function PlaceholderParagraphBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("div", { className: _this.props.className }, _this.props.children); };
        return _this;
    }
    return PlaceholderParagraphBase;
}(React.Component));
var PlaceholderParagraphStyled = styled(PlaceholderParagraphBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background: transparent;\n\n  /* The padding on top of the paragraph is later overdrawn\n  * by :before, to give the paragraph some whitespace\n  * on top. \n  * (This does not happen for the first paragraph in a collection.) */\n  &:not(:first-child) {\n    padding-top: 18px;\n    &:before {\n      position: absolute;\n      content: '';\n      top: 0px;\n      height: 18px;\n      left: 0;\n      right: 0;\n      background: #fff;\n    }\n  }\n"], ["\n  position: relative;\n  background: transparent;\n\n  /* The padding on top of the paragraph is later overdrawn\n  * by :before, to give the paragraph some whitespace\n  * on top. \n  * (This does not happen for the first paragraph in a collection.) */\n  &:not(:first-child) {\n    padding-top: 18px;\n    &:before {\n      position: absolute;\n      content: '';\n      top: 0px;\n      height: 18px;\n      left: 0;\n      right: 0;\n      background: #fff;\n    }\n  }\n"])));
var PlaceholderParagraph = /** @class */ (function (_super) {
    __extends(PlaceholderParagraph, _super);
    function PlaceholderParagraph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(PlaceholderParagraphStyled, __assign({}, _this.props)); };
        return _this;
    }
    return PlaceholderParagraph;
}(React.Component));
export { PlaceholderParagraph };
var templateObject_1;
